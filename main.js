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
        $(".show_cart").removeClass("active");
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

    // Kiểm tra kích thước màn hình ban đầu và chuyển vị trí các thẻ div
    checkScreenWidth();
    // Xử lý sự kiện khi kích thước màn hình thay đổi
    $(window).resize(function() {
        checkScreenWidth();
    });
    function checkScreenWidth() {
        // Kiểm tra kích thước màn hình
        var screenWidth = $(window).width();

        if (screenWidth <= 992) {
            // Nếu màn hình là mobile, di chuyển các thẻ div vào mobileContainer
            $('.header-menu_center').appendTo('.menu-mobile .menu_category .list_menu');
            $('.top-bar .header-right .header-right_ul').appendTo('.menu-mobile .menu_category .account');
        }
    }

//end
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
            if (scroll > 128) {
                $(".header").addClass("scroll");
            } else {
                $(".header").removeClass("scroll");
            }
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $("#vew_cart").click(function (){
       $(".show_cart").addClass("active");
    });
    $("#vew_cart").click(function() {
        $(".overlay").fadeIn();
    });
});
$(document).ready(function() {
    if (localStorage.getItem('popState') != 'shown'){
        $('#popupHome').delay(2000).fadeIn();
        localStorage.setItem('popState','shown')
    }

    $('.close-poup').click(function(e) // You are clicking the close button
    {
        $('#popupHome').fadeOut(); // Now the pop up is hidden.
    });
});
