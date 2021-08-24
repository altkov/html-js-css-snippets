(function($) {
    $.fn.menuActive = function(options) {
        var w = window;

        var settings = $.fn.extend({
            method: 'search',
            class: 'active',
        }, options);

        var compare = (settings.method === 'equal') ?
            (function(link) {
                return (link === w.location.href
                    || link === w.location.href + '/'
                    || link + '/' === w.location.href
                );
            }) :
            (function(link) {
                return w.location.href.indexOf(link) !== -1 && ( 
                    !(link === w.location.origin + '/' ) || w.location.href === w.location.origin + '/'
                );
            })

        this.each(function() {
            var $link = ($(this).is('a')) ? $(this) : $(this).find('a');
            var link = $link.get(0).href;
            if ( compare(link) ) {
                $(this).addClass(settings.class);
            }
        });

        return this;
    }
})(jQuery)