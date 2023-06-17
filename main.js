$( document ).ready(function () {
    $(".nav-bar").click(function (){
        $(".modal_menu-mobile").show();
        $(".modal_menu-mobile").addClass("show-mobile");
        $("body").css("overflow", "hidden");
    });
    $(".menu-mobile").click(function(event) {
        event.stopPropagation();
    });
    $(".modal_menu-mobile").click(function() {
        $(this).removeClass("show-mobile");
        $("body").css("overflow", "visible");
        $(".overlay").hide();
    });
    $(".nav-bar").click(function() {
        $(".overlay").fadeIn();
    });
    $(".overlay").click(function() {
        $(this).fadeOut();
    });
    if($(window).width() < 991) {
        $(".headtitle").click(function () {
            $(this).toggleClass("minus");
            var sibling = $(this).next();
            sibling.slideToggle();
        });
    }
    if ($(".content-services .services-item").length) {
        $(".content-services").owlCarousel({
            items: 2,
            nav: false,
            dots: false,
            autoplay:false,
            margin:12,
            loop:false,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1,
                    nav: true,
                },
                480: {
                    items: 1,
                    nav: true,
                },
                768: {
                    items: 1,
                    nav: true,
                },
                992: {
                    items: 1.4
                }
            },
        });
    }

    if ($(".content-blog .blog_item").length) {
        $(".content-blog").owlCarousel({
            items: 2,
            nav: false,
            dots: false,
            autoplay:false,
            margin:12,
            loop:false,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1,
                    nav: true,
                },
                480: {
                    items: 1,
                    nav: true,
                },
                768: {
                    items: 1,
                    nav: true,
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2.4
                }
            },
        });
    }
});
