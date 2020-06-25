$(document).ready(function () {

    /* sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    })

    /* Scroll on buttons */
    // $('.js--scroll-to-plans').click(function () {
    //     $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    // });

    // $('.js--scroll-to-start').click(function () {
    //     $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    // });

    /* navigation scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%;'
    })


    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '70%;'
    })

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%;'
    })

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    })


    /* Mobile nav*/

    $('.js--nav-icon, .js--main-nav a, .logo-sticky').click(function(element){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-ios-menu') && clicked == 'logo-sticky')
            return;

        //Opens and closes the menu
        if ($(window).width() < 768){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });


    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });
});