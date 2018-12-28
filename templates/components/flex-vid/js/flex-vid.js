(function ($) {

    'use strict';

    // Set up FitVids (only if the page has it)
    $(document).ready(function(){

        var flexVidClass = '.flex-vid';
        if ($(flexVidClass).length > 0) {
            $(flexVidClass).fitVids();
        }

    });

})(window.jQuery);