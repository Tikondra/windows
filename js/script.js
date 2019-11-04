$(document).ready(function(){
    $(".page-nav__btn").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
});