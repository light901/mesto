let popup = document.querySelector('.popup');
let nameInput = document.getElementById('name');
let jobInput = document.getElementById('job');
let nameform = document.getElementById('nameform')
let jobform = document.getElementById('jobform')


function openPopup() {
    popup.classList.add('popup_opened');
    nameform.value = nameInput.textContent;
    jobform.value = jobInput.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

let buttonEdit = document.querySelector('.profile-info__buttonedit');

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

// кнопка сохранить и закрыть окно
buttonSave.addEventListener('click', function () {
    nameInput.textContent = nameform.value;
    jobInput.textContent = jobform.value;
    closePopup();
})

