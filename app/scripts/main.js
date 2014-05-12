"use strict";
$(function () {
    $(window).on('resize load', function() {
        $('.cover-picture').css('height', $(this).innerHeight());
    });
});
