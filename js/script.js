function headerMenu() {

  var popup = document.querySelector('.main-nav');
  var openPopupButton = document.querySelector('.page-header__btn');
    

  openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.toggle('main-nav_show');
    openPopupButton.classList.toggle('active')
  });

  document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
      popup.classList.remove('main-nav_show');      
    }
  });
};

headerMenu();