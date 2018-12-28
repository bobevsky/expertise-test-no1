(function ($) {

    'use strict';

    var checkTarget = 'input:required, select:required, textarea:required',
        checkInvalidTarget = 'input:required:invalid, select:required:invalid, textarea:required:invalid',
        validationRow = '.form-row-validation',
        showClass = 'state-show',
        validationClass = 'state-invalid',
        checkParent = '.will-be-overwritten',
        emptyValue = '.will-be-overwritten-too',
        emptyCheck = function(sourceField) {
            checkParent = $(sourceField).closest('form');
            emptyValue = $(checkParent).find(checkTarget).filter(function() {
                return this.value === '';
            });
        };

    $(checkTarget).on('blur', function() {
        if (!$(this).is(':valid') && !$(this).hasClass(validationClass)){
            $(this).addClass(validationClass);
        } else if ($(this).is(':valid') && $(this).hasClass(validationClass)){
            $(this).removeClass(validationClass);
        }

        emptyCheck(this);
        if(!emptyValue.length) {
            $(checkParent).find(validationRow).removeClass(showClass);
        }
    });

    $('.form-row-submit').on('click', '.btn', function() {
        emptyCheck(this);
        if(emptyValue.length) {
            $(checkParent).find(validationRow).addClass(showClass);
            $(checkParent).find(checkInvalidTarget).addClass(validationClass);
        }
    });

})(window.jQuery);