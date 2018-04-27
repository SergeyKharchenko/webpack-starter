import './assets/scss/app.scss';

import $ from 'jquery';

$(function () {

    var $win = $(window);
    var $body = $('body');
    var targetEement = $('#caption');
    var targetHeight = targetEement.offset().top + targetEement.outerHeight();

    $('.menu-toggle').on('click', function () {
        $body.toggleClass('menu-open');
    });

    $win.on("scroll", function () {
        if ($win.scrollTop() > targetHeight) {
            $body.removeClass("menu-open");
        } else {
            $body.addClass("menu-open");
        }
    });

});