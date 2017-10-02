Linets Delete Buttons
=================

Make ajax request with delete method and csrf token for delete an element

Options
-------

| Option | Description |
| ------ | ----------- |
| dataMethod | **string** Name of data method attribute when HTTP Method for delete |
| dataToken | **string** Name of data token attribute with CSRF token |
| dataUrl | **string** Name of data url attribute with url for delete |
| confirmMessage | **string** Text to show in confirm message  |
| parentSelector | **string** Selector for use with jQuery.closest for remove element **default: null / Reload page** |
| afterRedirectTo | **string** Url to redirect after delete request response **default: null** |

Usage
-----

Include:

    <script src="/path/to/jquery.js">
    <script src="/path/to/jquery.ln-delete-buttons.js">
    <script>
        $('[data-method=delete]').lnDeleteButtons({
            confirmMessage: 'Are you sure?',
            parentSelector: '.element-container'
        });
    </script>

    <button type="button" data-url="..." data-method="delete" data-token="...">Remove</button>

Requirements
------------

- jQuery 1.11.\* http://jquery.com

Development
-----------

Jesus Urrutia (<jesus.urrutia@gmail.com>)
