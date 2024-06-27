//navbar scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $('.l-navbar');
        $nav.toggleClass('l-navbar--scrolled', $(this).scrollTop() > $nav.height());
    });
});



//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('.l-navbar__menu__items a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//wow init
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});

new WOW().init();

//overlay navbar
$(document).ready(function () {
    $(".l-navbar__toggler").click(function () {
        $(".l-navbar__menu").toggleClass('open');
        $(this).toggleClass('l-navbar__toggler').toggleClass('l-navbar__toggler--activate');
    });
});
$('.overlay').on('click', function () {
    $(".overlay").toggle(200);
    $(".l-navbar__toggler").toggleClass('l-navbar__toggler').toggleClass('l-navbar__toggler--activate');
    open = false;
});
//overlay menu clicked close
$('.l-navbar__menu__items a').click(function () {
    $(".l-navbar__menu ").removeClass("open");
    $(".l-navbar__toggler--activate").attr('class', 'l-navbar__toggler');
});

//buttom bar showup
jQuery(document).ready(function () {

    'use strict';

    var c, currentScrollTop = 0,
        navbar = $('.m-bar');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });

});


//speaker box
var speakerNo;
$(".popup-zoom").click(function () {
    speakerNo = $(this).attr('id');
    for (var i = 0; i < data.length; i++) {
        if (speakerNo == data[i]["speakerNo"]) {
            $("#relate").hide();
            $("#speakerImg").attr("src", "assets/img/speaker/" + "" + data[i]["speakerImg"] + ".jpg");
            $("#speakerImg").attr("alt", "" + data[i]["speakerName"] + "");
            $("#speakerName").text("" + data[i]["speakerName"] + "");
            $("#speakerInfo").html("" + data[i]["speakerInfo"] + "");
            $("#speakerIntro").html("" + data[i]["speakerIntro"] + "");
            $("#speakerSection").html("" + data[i]["speakerSection"] + "");
            $("#speakerPoint1").html("" + data[i]["speakerPoint1"] + "");
            $("#speakerPoint2").html("" + data[i]["speakerPoint2"] + "");
            $("#speakerPoint3").html("" + data[i]["speakerPoint3"] + "");

            if (data[i]["relateTitle"] !== "") {
                $("#relate").show();
                $("#relateLink").attr("href", "" + data[i]["relateLink"] + "");
            }
            console.log(data[i]);
        }
    }
    return false;
});