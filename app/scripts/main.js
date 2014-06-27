'use strict';
$(function () {
    $(window).on('resize load', function() {
        $('.cover-picture img').css('height', $('.sidebar').height());
    });
});
