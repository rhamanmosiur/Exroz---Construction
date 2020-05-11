(function($) {
    //nav menu icon
    $(".nav-close").css("display", "none");

    $(".nav-open").click(function() {
        $(this).hide("fast");
        $(".nav-close").show("fast");
    });

    $(".nav-close").click(function() {
        $(this).hide("fast");
        $(".nav-open").show("slow");
    });

    // stycky header
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('header').addClass('neel');
        } else {
            $('header').removeClass('neel');
        }

    })

    // active JS 
    $('ul li').click(function() {
        $('li').removeClass("active");
        $(this).addClass("active");
    });

    //smooth scroll JS
    var scroll = new SmoothScroll('a[href*="#"]', {
        // speed &duration
        speed: 2000
    });

    //wow JS
    new WOW().init();

})(jQuery);