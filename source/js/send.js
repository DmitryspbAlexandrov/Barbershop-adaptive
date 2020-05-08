//форма для записи

var singUp = document.querySelector('.form__sing-up');
var send = document.querySelector('.button--wide');
var surname = singUp.querySelector('[name=surname]');
var name = singUp.querySelector('[name=name]');
var tel = singUp.querySelector('[name=tel]');

//попапы
var modalSuccess = document.querySelector('.modal-success');
var sucClose = modalSuccess.querySelector('.button-pop-close');
var modalFail = document.querySelector('.modal-failure');
var failClose = modalFail.querySelector('.button-pop-close');
var singUp = document.querySelector('.form__sing-up');

//отправка формы для записи
//простая валидация на заполнение полей

singUp.addEventListener('submit', function (evt) {
  if (!tel.value || !name.value) {
    evt.preventDefault();
    modalFail.classList.add('modal--show-popup');
  } else {
    evt.preventDefault();
    modalSuccess.classList.add('modal--show-popup');
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
