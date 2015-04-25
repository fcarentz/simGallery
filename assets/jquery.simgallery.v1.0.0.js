/*
 * jQuery simGallery Plugin 1.0.0 (2015-04-24)
 *
 * https://github.com/fcarentz/simGallery
 *
 * Copyright (c) 2015 Frank Carentz
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
 
(function ($) {

    $.fn.simGallery = function (selector, options) {

        options = $.extend({}, defaults, options);

        return this.each(function () {
            //If the 
            if (typeof $(this).data('gallery-list') !== 'undefined') {
                options.gallery = $(this).data('gallery-list');
            }
            var viewer = $(this);
            var images = $('#' + options.gallery + ' img');
            //We have no images say something
            if (images.length == 0) {
                $(this).text('No images have been added to the gallery list element');
            }
            //We have 1 image set it as background ahd keep the thumbnails hidden.
            else if (images.length == 1) {
                $(this).css('background-image', 'url(' + $(images[0]).attr('src') + ')');
            }
            //We have more than 1 image, Set it to background and show the thumbnails
            else {
                $(this).css('background-image', 'url(' + $(images[0]).attr('src') + ')');
                $('#' + options.gallery).show();
                images.each(function () {
                    $(this).click(function (e) {
                        viewer.css('background-image', 'url(' + $(this).attr('src') + ')');
                    });
                });
            }
        });
    };
    var defaults = {
        gallery: 'sg-gallery'
    };

})(jQuery);