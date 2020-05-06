//попап для регистрации

var openReg = document.querySelector('.user-list__login');
var popupLogin = document.querySelector('.modal-login');
var loginReg = document.querySelector('[name=login');
var passwordReg = document.querySelector('[type=password]');
var formReg = document.querySelector('.modal-form');
var loginClose = document.querySelector('.button-modal--close');

//открытие окна регистрации

openReg.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupLogin.classList.add('modal--show');
  loginReg.focus();
});

//отслеживание отправки формы
//проверяем введён ли логин и пароль
//отключение перехода по ссылке, если условие срабатывает и добавляется анимация ошибки
//если условие не срабатывает, получает доступ к записаному логину

formReg.addEventListener('submit', function (evt) {
  if (!loginReg.value || !passwordReg.value) {
    evt.preventDefault();
    popupLogin.classList.add('modal--error');
  }
});

//закрытие окна регистрации

loginClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupLogin.classList.remove('modal--show');
  popupLogin.classList.remove('modal--error');
});

//закрытие окна регистрации клавишей Esc

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popupLogin.classList.contains('modal--show')) {
      evt.preventDefault();
      popupLogin.classList.remove('modal--show');
    }
  }
});
