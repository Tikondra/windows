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

function geo() {

  let geo = document.querySelector('.header-form__select');
  let adress = document.querySelectorAll('.adres');
  let tel = document.querySelectorAll('.phone');

  geo.addEventListener('change', function () {

    var selind = geo.options.selectedIndex;
    var txt = geo.options[selind].text;
    var val = geo.options[selind].value;


    if (val == 'Astrakhan') {

      adress[0].classList.remove('adres--hide');
      adress[1].classList.add('adres--hide');
      tel[0].classList.remove('phone--hide');
      tel[1].classList.add('phone--hide');
    };

    if (val == 'Atirau') {

      adress[0].classList.add('adres--hide');
      adress[1].classList.remove('adres--hide');
      tel[0].classList.add('phone--hide');
      tel[1].classList.remove('phone--hide');
    };
  });
};

function svgColor() {
  const overlay = document.getElementById("path-constr");
  const overlay2 = document.getElementById("path-constr2");
  // Click on a color

  var el = document.getElementsByClassName("jaluzi-constructor__color");
  for (var i = 0; i < el.length; i++) {
    el[i].onclick = changeColor;
  }

  var el = document.getElementsByClassName("jaluzi-constructor__color2");
  for (var i = 0; i < el.length; i++) {
    el[i].onclick = changeColor2;
  }

  function changeColor(e) {
    // get the hex color
    let hex = e.target.getAttribute("data-hex");
    // set the hex color
    overlay.style.fill = hex;
  }

  function changeColor2(e) {
    // get the hex color
    let hex = e.target.getAttribute("data-hex");
    // set the hex color
    overlay2.style.fill = hex;
  }
}

function construstor() {
  let btnJal = document.querySelector(".btn-jal-js");
  let btnRol = document.querySelector(".btn-rol-js");
  let fullJal = document.querySelector(".full-jal-js");
  let fullRol = document.querySelector(".full-rol-js");
  let listJal = document.querySelector(".list-jal-js");
  let listRol = document.querySelector(".list-rol-js");


  btnJal.addEventListener('click', function () {
    btnJal.classList.add('jaluzi-constructor__btn--active');
    btnRol.classList.remove('jaluzi-constructor__btn--active');
    fullJal.classList.remove('jaluzi-constructor__pic--hide');
    fullRol.classList.add('jaluzi-constructor__pic--hide');
    listJal.classList.remove('jaluzi-constructor__list--hide');
    listRol.classList.add('jaluzi-constructor__list--hide');
  });

  btnRol.addEventListener('click', function () {
    btnJal.classList.remove('jaluzi-constructor__btn--active');
    btnRol.classList.add('jaluzi-constructor__btn--active');
    fullJal.classList.add('jaluzi-constructor__pic--hide');
    fullRol.classList.remove('jaluzi-constructor__pic--hide');
    listJal.classList.add('jaluzi-constructor__list--hide');
    listRol.classList.remove('jaluzi-constructor__list--hide');
  });


}

geo();

if (document.querySelector('.catalog__box')) {

  catalogSlider();
};

if (document.querySelector('.price')) {
  price();
};

if (document.querySelector('.jaluzi-constructor')) {
  svgColor();
  construstor()
};
