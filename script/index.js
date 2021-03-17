let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.profile-info__name');
let jobInput = document.querySelector('.profile-info__text');
let nameForm = document.querySelector('.popup__input-text_name');
let jobForm = document.querySelector('.popup__input-text_job');
let formElement = document.querySelector('.input-form');
let buttonClose = document.querySelector('.popup__close-button');
let buttonEdit = document.querySelector('.profile__button-edit');

function openPopup() {
    popup.classList.add('popup_opened');
    nameForm.value = nameInput.textContent;
    jobForm.value = jobInput.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = nameForm.value;
    jobInput.textContent = jobForm.value;
    closePopup();
}

// кнопка открытия+ вставка текста с сайта
buttonEdit.addEventListener('click', openPopup);

// кнопка закрытия, без сохранения изменений
buttonClose.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);