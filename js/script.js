function headerMenu() {

  var popup = document.querySelector('.page-nav__list');
  var openPopupButton = document.querySelector('.page-nav__btn');
    

  openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.toggle('page-nav__list_show');
    openPopupButton.classList.toggle('active')
  });

  document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === 27) {
      popup.classList.remove('page-nav__list_show');      
    }
  });
};

headerMenu();

