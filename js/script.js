$(document).ready(function(){
    $(".page-nav__btn").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
});

$(function() {
 $(".owl-carousel").owlCarousel({
 	items: 1,
 	nav: true,
 	dots: false
 });
});

function indexJs() {
  let img = [
      '../img/full-img1.jpg',
      '../img/full-img2.jpg',
      '../img/full-img3.jpg'];
  let catalog = document.querySelector('.catalog__box');
  let item = catalog.querySelectorAll('.catalog__item');
  let fullImg = catalog.querySelector('.catalog__full-img');

  console.log(item[2]);

  for (let i = 0; i < item.length; i++) {

    item[i].addEventListener('click', function () {
      for (let i = 0; i < item.length; i++) {
        item[i].classList.remove('active');
      }
      item[i].classList.add('active');
      fullImg.src = img[i];
    });
  }
};

indexJs();
