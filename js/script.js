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
  let next = price.querySelectorAll('.slider-price__link--next');
  let prew = price.querySelectorAll('.slider-price__link--prew');
  let status = price.querySelector('.status-bar');
  let statusText = price.querySelector('.status-bar__text');
  let inputBox = price.querySelectorAll('.slider-price2__item');
  let inputs = price.querySelectorAll('.slider-price2__select');
  let tipCommunication = price.querySelector('.slider-price3__select--communication');
  let inputBox2 = price.querySelectorAll('.slider-price3__item');
  let inputs2 = price.querySelectorAll('.js__input');

  for (let i = 0; i < next.length; i++) {

    next[i].addEventListener('click', function () {

      for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
      }

      slide[i+1].classList.add('active');
      status.classList.add('status'+[i+2]);
      statusText.textContent = 'Вопрос ' + [i+2] + ' из 3';
    });
  }

  for (let i = prew.length-1; i >= 0; i--) {

    prew[i].addEventListener('click', function () {

      for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove('active');
      }

      slide[i].classList.add('active');
      status.classList.remove('status'+[i+2]);
      status.classList.add('status'+[i+1]);
      statusText.textContent = 'Вопрос ' + [i+1] + ' из 3';
    });
  }

  inputs[0].addEventListener('change', function () {

    var selind = inputs[0].options.selectedIndex;
    var txt = inputs[0].options[selind].text;
    var val = inputs[0].options[selind].value;

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    };


    if (val == 'wood') {
          inputBox[1].classList.add('slider-price2__item--hide');
          inputBox[3].classList.add('slider-price2__item--hide');
          inputBox[4].classList.remove('slider-price2__item--hide');
          inputBox[5].classList.remove('slider-price2__item--hide');
          inputBox[6].classList.add('slider-price2__item--hide');
          inputBox[7].classList.add('slider-price2__item--hide');
    } else

    if (val == 'PVH') {
          inputBox[1].classList.remove('slider-price2__item--hide');
          inputBox[3].classList.remove('slider-price2__item--hide');
          inputBox[4].classList.add('slider-price2__item--hide');
          inputBox[5].classList.add('slider-price2__item--hide');
          inputBox[6].classList.add('slider-price2__item--hide');
          inputBox[7].classList.add('slider-price2__item--hide');
    } else

    if (val == 'wood-al') {
          inputBox[1].classList.add('slider-price2__item--hide');
          inputBox[3].classList.add('slider-price2__item--hide');
          inputBox[4].classList.remove('slider-price2__item--hide');
          inputBox[5].classList.add('slider-price2__item--hide');
          inputBox[6].classList.add('slider-price2__item--hide');
          inputBox[7].classList.add('slider-price2__item--hide');
    } else

    if (val == 'al') {
          inputBox[1].classList.add('slider-price2__item--hide');
          inputBox[3].classList.add('slider-price2__item--hide');
          inputBox[4].classList.add('slider-price2__item--hide');
          inputBox[5].classList.add('slider-price2__item--hide');
          inputBox[6].classList.remove('slider-price2__item--hide');
          inputBox[7].classList.remove('slider-price2__item--hide');
    }


    for (let j = 0; j < inputBox.length; j++) {

      if (inputBox[j].classList.contains('slider-price2__item--hide')) {
        inputs[j].disabled = "disabled";
      };
    };
  });

  tipCommunication.addEventListener('change', function () {

    var ind = tipCommunication.options.selectedIndex;
    var text = tipCommunication.options[ind].text;
    var value = tipCommunication.options[ind].value;

    for (let i = 0; i < inputs2.length; i++) {
      inputs2[i].disabled = false;
    };


    if (value == 'mob') {
          inputBox2[4].classList.remove('slider-price3__item--hide');
          inputBox2[5].classList.add('slider-price3__item--hide');
          inputBox2[6].classList.add('slider-price3__item--hide');
          inputBox2[7].classList.add('slider-price3__item--hide');
    } else

    if (value == 'whats') {
          inputBox2[4].classList.add('slider-price3__item--hide');
          inputBox2[5].classList.remove('slider-price3__item--hide');
          inputBox2[6].classList.add('slider-price3__item--hide');
          inputBox2[7].classList.add('slider-price3__item--hide');
    } else

    if (value == 'vk') {
          inputBox2[4].classList.add('slider-price3__item--hide');
          inputBox2[5].classList.add('slider-price3__item--hide');
          inputBox2[6].classList.remove('slider-price3__item--hide');
          inputBox2[7].classList.add('slider-price3__item--hide');
    } else

    if (value == 'inst') {
          inputBox2[4].classList.add('slider-price3__item--hide');
          inputBox2[5].classList.add('slider-price3__item--hide');
          inputBox2[6].classList.add('slider-price3__item--hide');
          inputBox2[7].classList.remove('slider-price3__item--hide');
    }


    for (let j = 0; j < inputs2.length; j++) {

      if (inputBox2[j+4].classList.contains('slider-price3__item--hide')) {
        inputs2[j].disabled = "disabled";
      };
    };
  });
};

if (document.querySelector('.catalog__box')) {

  catalogSlider();
  price();

} else {

  price();

}
