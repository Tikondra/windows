$(document).ready(function(){
    $(".page-nav__btn").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
});

$(function() {
 $(".owl-carousel").owlCarousel({
 	items: 3,
 	nav: true,
 	dots: false,
 	autoplay: false
 });
});