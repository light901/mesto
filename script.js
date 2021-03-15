let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.namen');
let jobInput = document.querySelector('.jobj');
let nameform = document.querySelector('.name');
let jobform = document.querySelector('.job');
let formElement = document.querySelector('.popup__container')


function openPopup() {
    popup.classList.add('popup_opened');
    nameform.value = nameInput.textContent;
    jobform.value = jobInput.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

let buttonEdit = document.querySelector('.profile__buttonedit');

// кнопка открытия+ вставка текста с сайта
buttonEdit.addEventListener('click', function () {
    openPopup();
})

let buttonClose = document.querySelector('.popup__close-button');

// кнопка закрытия, без сохранения изменений
buttonClose.addEventListener('click', function () {
    closePopup();
})

let buttonSave = document.querySelector('.popup__save-button');

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = nameform.value;
    jobInput.textContent = jobform.value;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);