/*CONFIG ELEMENT*/
    /*
    selector: required string - folder in which to search for component
    repeat: int - number of times the template should be rendered ( default: 1 )
    component: nullable string - stores the name of a component
    template: nullable string - stores the name of the template (within the selector folder) that should be used when rendering the component
    templaterenderobj: nullable obj - object passed when rendering a component template. Used to configure a template with Mustache
     */
/*/CONFIG ELEMENT*/

var renderer = function(config){
    var $head = $('head'),
        defaults = {
            selector: '',
            repeat: 1,
            component:'',
            template:'',
            templaterenderobj: {}
        },
        finalobj = [],
        checkComponents = function(){
            if($('component').length > 0){
                var $component = $('component');

                $.each($component, function(i, missingNo){
                    var componentName = $(missingNo).attr('data-renderer'),
                        template = $head.data(componentName);

                    var existentionalCrisis = null;
                    $.each(finalobj, function(i, obj){
                        if(obj.component === componentName){
                            existentionalCrisis = i;
                            return false;
                        }
                    });

                    if(existentionalCrisis !== null){
                        if(template.length > 0){
                            prepareContentHolder($component, prepareContentHolder(template, finalobj[existentionalCrisis] ));
                        }
                        else{
                            var element = finalobj[existentionalCrisis];

                                $.ajax({
                                url: urlBuilder(element),
                                async: false,
                                success: function (template) {

                                    appendPreparedHtml($(missingNo), prepareContentHolder(template, finalobj[existentionalCrisis]));

                                    $head.data(element.component, template);
                                },
                                error: function() {
                                    console.log('error: '+ element.component);
                                }
                            });

                            checkComponents();
                        }
                    }
                    else{
                        console.error('Definition of "'+componentName+'" is not found in the renderer-init.');
                    }
                });
            }
            else{
                //if all is resolved, remove data-renderer script
                $('script[data-renderer=remove-renderer-when-done]').remove();
            }
        },
        prepareContentHolder = function(data, obj){
            var contentHolder = $('<div></div>');

            /*config.templaterenderobj logic*/
            if(!$.isEmptyObject(obj.templaterenderobj)){
                data = Mustache.render(data, obj.templaterenderobj);
            }
            /*/config.templaterenderobj logic*/

            /*config.repeat logic*/
            if(obj.repeat > 1){
                var i = 0;
                while(i<obj.repeat){
                    contentHolder.append(data);
                    i++;
                }
            }
            else{
                contentHolder.html(data);
            }
            /*config.repeat logic*/

            return contentHolder;
        },
        appendPreparedHtml = function(componentPlaceholder, contentHolder){
            componentPlaceholder.after(contentHolder.html());
            componentPlaceholder.remove();
        },
        urlBuilder = function(obj){
            return '../components/'+obj.selector+'/'+obj.template+'.html';
        };

    $.each(config, function(i, configObj){
       finalobj.push($.extend({}, defaults, configObj));
    });

    $.each(finalobj, function(i, element){

        if(element.selector !== ""){
            /*Prepare element.component and element.template key if not set*/
                if(element.component === ''){
                    element.component = element.selector;
                }

                if(element.template === ''){
                    element.template = element.selector;
                }
            /*/Prepare element.component and element.template key if not set*/

            /*Check if component should be rendered on this page*/
            var placeholderEl = $('component[data-renderer='+element.component+']');

            if(placeholderEl.length > 0){

                $.ajax({
                    url: urlBuilder(element),
                    async: false,
                    success: function (template) {
                        appendPreparedHtml(placeholderEl, prepareContentHolder(template, element));

                        $head.data(element.component, template);
                    },
                    error: function() {
                        console.log('Error component "'+ element.component+'" not found.');
                    }
                });
            }
        }
        else{
            console.error("selector property is not set properly");
        }
    });

    checkComponents();
};