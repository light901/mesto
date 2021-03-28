let popupEdit = document.querySelector('.popup_edit'); // попап редактирования
let popupAdd = document.querySelector('.popup_add'); // попап добавления картинки
let nameInput = document.querySelector('.profile-info__name'); // поле вода имени "попап редактирование профиля"
let jobInput = document.querySelector('.profile-info__text'); // поле вода работы "попап редактирование профиля"
let nameForm = document.querySelector('.popup__input-text_type_name');
let jobForm = document.querySelector('.popup__input-text_type_job');
let formElement = document.querySelector('.popup__form');
let formAdd = popupAdd.querySelector('.popup__form');
let buttonClose = document.querySelector('.popup__close-button');
let buttonEdit = document.querySelector('.profile__button-edit');
let buttonAdd = document.querySelector('.profile__button-add');


function openPopupEdit() {
    popupEdit.classList.add('popup_opened');
    nameForm.value = nameInput.textContent;
    jobForm.value = jobInput.textContent;
}

function closePopupEdit() {
    popupEdit.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = nameForm.value;
    jobInput.textContent = jobForm.value;
    closePopupEdit();
}


function formSubmitHandlerPopupAdd(evt) {
    evt.preventDefault();
    const placeElement = cardTemplate.cloneNode(true)
    const placeInput = document.querySelector('.popup__input-text_type_place');
    const placeValue = placeInput.value;
    const linkInput = document.querySelector('.popup__input-text_type_link');
    const placeLink = linkInput.value
    placeElement.querySelector('.elements__text').textContent = placeValue;
    placeElement.querySelector('.elements__image').src = placeLink;
    placeElement.querySelector('.elements__like').addEventListener('click', function(evt){
        evt.target.classList.toggle('elements__like_active') })
    placeElement.querySelector('.elements__delete-button').addEventListener('click', function(evt){
        evt.target.closest('.elements__card').remove();
    });
    const popupFullImage = document.querySelector('.popup-image');
    placeElement.querySelector('.elements__image').addEventListener('click', function(evt){
        popupFullImage.classList.add('popup-image_opened')
        let picture = document.querySelector('.popup-image__picture');
        picture.src = evt.target.src;
    });
        const closePopupImageButton = document.querySelector('.popup-image__close-button');
        closePopupImageButton.addEventListener('click', function(){
            popupFullImage.classList.remove('popup-image_opened');

    
    });
    places.prepend(placeElement);
    popupAdd.classList.remove('popup_opened');
    };

    formAdd.addEventListener('submit', formSubmitHandlerPopupAdd);

// кнопка открытия+ вставка текста с сайта
buttonEdit.addEventListener('click', openPopupEdit);


buttonAdd.addEventListener('click', function(){
    popupAdd.classList.add('popup_opened');
});
popupAdd.querySelector('.popup__close-button').addEventListener('click', function closePopupAdd(){
    popupAdd.classList.remove('popup_opened');
})

// кнопка закрытия, без сохранения изменений
buttonClose.addEventListener('click', closePopupEdit);

formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
        name: 'Карачаевск',
        link: src='./images/1.jpg'
    },
    {
        name: 'Гора Эльбрус',
        link: src='./images/2.jpg'
    },
    {
        name: 'Домбай',
        link: src='./images/3.jpg'
    },
    {
        name: 'Гора Эльбрус',
        link: src='./images/4.jpg'
    },
    {
        name: 'Домбай',
        link: src='./images/5.jpg'
    },
    {
        name: 'Карачаевск',
        link: src='./images/6.jpg'
    }
];

const popupFullImage = document.querySelector('.popup-image');
const cardTemplate = document.querySelector('#elements-card').content;
const places = document.querySelector('.elements');

initialCards.forEach(function (element) {
    const placeElement = cardTemplate.cloneNode(true)
    placeElement.querySelector('.elements__text').textContent = element.name
    placeElement.querySelector('.elements__image').src = element.link
    placeElement.querySelector('.elements__like').addEventListener('click', function(evt){
        evt.target.classList.toggle('elements__like_active') })
    placeElement.querySelector('.elements__delete-button').addEventListener('click', function(evt){
        evt.target.closest('.elements__card').remove();
    });
    const popupFullImage = document.querySelector('.popup-image');
    placeElement.querySelector('.elements__image').addEventListener('click', function(evt){
        popupFullImage.classList.add('popup-image_opened')
        const picture = document.querySelector('.popup-image__picture');
        picture.src = evt.target.src;
        const caption = document.querySelector('.popup-image__caption');
        caption.textContent = element.name;
    });
        const closePopupImageButton = document.querySelector('.popup-image__close-button');
        closePopupImageButton.addEventListener('click', function(){
            popupFullImage.classList.remove('popup-image_opened');

    
    });

places.append(placeElement)
    });
