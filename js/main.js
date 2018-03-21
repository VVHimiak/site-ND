//"use strict";
// PRELOADER
/*$(window).on('load', function () {
    $('.preloader').fadeOut('slow');
});*/

$(document).ready(function () {
    // FORM
    $('.next').on('click', function () {
        var visibleItem = $('.step-area.visible');
        var nextBtn = $(this);

        if(visibleItem.index() < $('.step-area').length - 1) {
            $('.repair-price__content--number.is-active').next().addClass('is-active');
            nextBtn.addClass('disabled');
            visibleItem.fadeOut(300, function () {
                $(this).removeClass('visible').next().fadeIn(300).addClass('visible');
                nextBtn.removeClass('disabled');
            })
        }
    });

    $('.prev').on('click', function () {
        var visibleItem = $('.step-area.visible');
        var prevBtn = $(this);

        if(visibleItem.index()) {
            $('.repair-price__content--number.is-active').last().removeClass('is-active');
            prevBtn.addClass('disabled');
            visibleItem.fadeOut(300, function () {
                $(this).removeClass('visible').prev().fadeIn(300).addClass('visible');
                prevBtn.removeClass('disabled');
            })
        }
    });
    // FORM-END

});

$(".header__feedback").click(function(){
    $("body").addClass("body_hidden");
    $(".modal_window").stop().fadeIn(300);
    $(".content_window_md").animate({top: "100"}, 500);
});

$(".hidden_bt_modal").click(function(){
    $(".content_window_md").animate({top: "-100"}, 500);
    $(".modal_window").stop().fadeOut(200);
    $("body").removeClass("body_hidden");
});




// SWIPER-SLIDER
var swiper = new Swiper('.swiper-container', {
    //slidesPerView: 1,
    effect: 'fade',
    spaceBetween: 0,
    loop: true,

    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// SWIPER-SLIDER-END

// DROPDOWN
$('.dropdown__button').click(function(){
   $(this).find('~ ul').stop().slideToggle('fast');

});
// DROPDOWN-END

// TOP-MENU
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("header-nav").style.left = "0";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("header-nav").style.left = "-100%";
}
// TOP-MENU-END

new WOW().init();

$('.header__content--button').on('click', function (e) {
    e.preventDefault();
    $('html,body').stop().animate({ scrollTop: $('.repair-price').offset().top }, 800);
});

$('.price-interest__button').on('click', function (e) {
    e.preventDefault();
    $('html,body').stop().animate({ scrollTop: $('.contact-form').offset().top }, 800);
});



(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i,el){
            function visPx(){
                var H = $(this).height(),
                    r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
                return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
            } visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));

$(".abso").inViewport(function(px){
    if(px) $(this).addClass("action") ;
    $(this).toggleClass("action", !!px );
});



$(":input").inputmask();



