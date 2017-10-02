/**
 * Linets Delete Buttons
 *
 * Make ajax request with delete method and csrf token for delete an element
 *
 * @author Jesus Urrutia <jesus.urrutia@gmail.com>
 */
;(function ($) {
    $.fn.lnDeleteButtons = function (options) {
        var config = $.extend({
            dataMethod: 'method',
            dataToken: 'token',
            dataUrl: 'url',
            confirmMessage: 'Are you sure?',
            parentSelector: null,
            afterRedirectTo: null
        }, options);

        return this.each(function (index, el) {
            var $this = $(el);
            $this
                .on('click', function (e) {
                    e.preventDefault();
                    var $this = $(this);
                    var url = $this.data(config.dataUrl);
                    var method = $this.data(config.dataMethod);
                    var token = $this.data(config.dataToken);

                    if (!confirm(config.confirmMessage)) {
                        return;
                    }

                    $.ajax({
                        url: url,
                        type: method,
                        dataType: 'json',
                        data: { token: token }
                    }).done(function () {
                        if (config.parentSelector) {
                            $this.closest(config.parentSelector).remove();
                        } else {
                            if (config.afterRedirectTo) {
                                location.href = config.afterRedirectTo;
                            } else {
                                location.reload();
                            }
                        }
                    }).fail(function (jqXHR, textStatus) {
                        alert(textStatus + ': ' + jqXHR.responseText);
                    });
                })
        ;
        });
    };
})(jQuery);
