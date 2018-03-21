
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





$(".image_block").click(function(){
    var imageSL = $(this).html();

    $(".big_image").html(imageSL);

    $(this).siblings(".image_block").removeClass("min_image_active");

    $(this).addClass("min_image_active");
});
var swiper = new Swiper('.swiper-container', {
    allowTouchMove: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
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