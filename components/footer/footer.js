(function ($) {

    $.fn.qiiFooter = function (option) {
        var jqObj = this;
        // console.log("Option passed : ", option);
        // // This is the easiest way to have default options.
        var defaultSettings = qiiFooter?qiiFooter:{};
        var settings = $.extend(defaultSettings, option);

        createQiiFooter();

        function createQiiFooter() {
            jqObj.html('<footer class="main-footer">'
                + '<div class="pull-right hidden-xs">'
                + settings.additionalInformation
                + '</div>'
                + '<strong>Copyright &copy;' + settings.year + '<a href="#">' + settings.company + '</a>.'
                + '</strong>'
                + settings.message
                + '</footer>');
        }
        return this;
    };
}(jQuery));