/*!
* Display popup window.
*
* Requires: jQuery v1.3.2
*/
(function($) {
    $.popupWindow = function(url, options) {
        var defaults = {
            height: 500,
            width: 500,
            toolbar: false,
            scrollbars: false, // safari always adds scrollbars
            status: false,
            resizable: false,
            left: 0,
            top: 0,
            center: true,
            createNew: true,
            location: false,
            menubar: false,
            onUnload: null
        };

        var options = $.extend({}, defaults, options);

        // center the window
        if (options.center) {
            options.top = (screen.height - options.height + 50) / 2;
            options.left = (screen.width - options.width) / 2;
        }

        // params
        var params = [];
        params.push('location=' + (options.location ? 'yes' : 'no'));
        params.push('menubar=' + (options.menubar ? 'yes' : 'no'));
        params.push('toolbar=' + (options.toolbar ? 'yes' : 'no'));
        params.push('scrollbars=' + (options.scrollbars ? 'yes' : 'no'));
        params.push('status=' + (options.status ? 'yes' : 'no'));
        params.push('resizable=' + (options.resizable ? 'yes' : 'no'));
        params.push('height=' + options.height);
        params.push('width=' + options.width);
        params.push('left=' + options.left);
        params.push('top=' + options.top);

        // open window
        var random = new Date().getTime();
        var name = options.createNew ? 'popup_window_' + random : 'popup_window';
        var win = window.open(url, name, params.join(','))

        // unload handler
        if (options.onUnload) {
            var unloadInterval = setInterval(function() {
                if (!win || win.closed) {
                    clearInterval(unloadInterval);
                    options.onUnload.call();
                }
            }, 250);
        }

        // focus window
        if (win && win.focus) win.focus();
        
        // return handle to window
        return win;
    };
})(jQuery);