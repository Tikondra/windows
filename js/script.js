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

function catalogSlider() {
  let img = [
      'img/full-img1.jpg',
      'img/full-img2.jpg',
      'img/full-img3.jpg'];
  let catalog = document.querySelector('.catalog__box');
  let item = catalog.querySelectorAll('.catalog__item');
  let fullImg = catalog.querySelector('.catalog__full-img');

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

function price() {
  let price = document.querySelector('.price');
  let slide = price.querySelectorAll('.slider-price');
  let next = price.querySelectorAll('.slider-price__link');
  let status = price.querySelector('.status-bar');
  let statusText = price.querySelector('.status-bar__text');

  for (let i = 0; i < next.length-1; i++) {

    next[i].addEventListener('click', function () {

      for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
      }

      slide[i+1].classList.add('active');
      status.classList.add('status'+[i+2]);
      statusText.textContent = 'Вопрос ' + [i+2] + ' из 3'
    });
  }
};

catalogSlider();
price();
