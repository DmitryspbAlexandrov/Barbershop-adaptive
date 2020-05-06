//форма для записи

var singUp = document.querySelector('.form__sing-up');
var send = singUp.querySelector('[type=submit]');
var surname = singUp.querySelector('[name=surname]');
var name = singUp.querySelector('[name=name]');
var tel = singUp.querySelector('[name=tel]');

//попапы
var modalSuccess = document.querySelector('.modal-success');
var sucClose = modalSuccess.querySelector('.button-pop-close');
var modalFail = document.querySelector('.modal-failure');
var failClose = modalFail.querySelector('.button-pop-close');

//отправка формы для записи
//простая валидация на заполнение полей

send.addEventListener('submit', function (evt) {
  evt.preventDefault();
  if (!surname.value || !tel.value || !name.value) {
    evt.preventDefault();
    modalSuccess.classList.add('modal--show-popup');
  } else {
    evt.preventDefault();
    modalFail.classList.add('modal--show-popup');
  }
});

//закрытие попапа "успеха"

sucClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalSuccess.classList.remove('modal--show-popup');
});

//закрытие попапа "провала"

failClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFail.classList.remove('modal--show-popup');
});
