$(function() {
 	if ($('.flexslider li').length > 1) {
        (function () {
            var $window = $(window), flexslider = { vars:{} };
            function getGridSize() {
                return  (window.innerWidth < 900) ? 4 :
                        (window.innerWidth < 991) ? 5 :
                        (window.innerWidth < 1200) ? 6 : 6;
            }
            $(window).on('load', function () {
                $('.flexslider').flexslider({
                    useCSS: true,
                    touch: true,
                    animationSpeed: 400,
                    slideshowSpeed: 10000,
                    animation: 'slide',
                    controlNav: true,
                    directionNav: false,
                    itemWidth: 300,
                    itemMargin: 0,
                    move: 1,
                    minItems: getGridSize(),
                    maxItems: getGridSize(),
                    start: function(slider){
                        flexslider = slider;
                    }
                });
            });
            $(window).on('resize', function () {
                var gridSize = getGridSize();
                flexslider.vars.minItems = gridSize;
                flexslider.vars.maxItems = gridSize;
            });
        }());
        $(window).trigger('resize');
    }
});