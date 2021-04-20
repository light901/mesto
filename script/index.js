const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add'); 
const nameInput = document.querySelector('.profile-info__name'); 
const jobInput = document.querySelector('.profile-info__text'); 
const nameForm = document.querySelector('.popup__input-text_type_name');
const jobForm = document.querySelector('.popup__input-text_type_job');
const formElement = document.querySelector('.popup__form');
const formAdd = popupAdd.querySelector('.popup__form');
const buttonClose = document.querySelector('.popup__close-button');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const popupFullImage = document.querySelector('.popup-image');
const cardTemplate = document.querySelector('#elements-card').content;
const places = document.querySelector('.elements');
const listener = function(e){
	const popup = document.querySelector('.popup_opened');
	if(e.target === popup || e.key === 'Escape') closePopup(popup);
}

function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', listener);
	document.addEventListener('click', listener);
}

function openPopupEdit() {
    openPopup(popupEdit);
    nameForm.value = nameInput.textContent;
    jobForm.value = jobInput.textContent;
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('click', listener);
	document.removeEventListener('keydown', listener);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = nameForm.value;
    jobInput.textContent = jobForm.value;
    closePopup(evt.target.closest('.popup'));
}

function formSubmitHandlerPopupAdd(evt) {
    evt.preventDefault();
	const placeInput = document.querySelector('.popup__input-text_type_place');
	const placeValue = placeInput.value;
	const linkInput = document.querySelector('.popup__input-text_type_link');
	const placeLink = linkInput.value;
	const arr = { name: placeValue, link: placeLink };
	const placeElement = createCard(arr);
	places.prepend(placeElement);
	evt.target.closest('form').reset();
	evt.target.closest('form').querySelector('button').classList.add('popup__save-button_inactive');
	closePopup(evt.target.closest('.popup'));
};

formAdd.addEventListener('submit', formSubmitHandlerPopupAdd);

buttonEdit.addEventListener('click', openPopupEdit);
buttonAdd.addEventListener('click', function(){ openPopup(popupAdd) });
popupAdd.querySelector('.popup__close-button').addEventListener('click', function(e){ closePopup(e.target.closest('.popup')) });
popupFullImage.querySelector('.popup__close-button').addEventListener('click', function(e){ closePopup(e.target.closest('.popup')) });
buttonClose.addEventListener('click', function(e){ closePopup(e.target.closest('.popup')) });
formElement.addEventListener('submit', formSubmitHandler);

function createCard(cardData) {
	const element = cardTemplate.cloneNode(true);
	const picture = document.querySelector('.popup-image__picture');
	const caption = document.querySelector('.popup-image__caption');
	element.querySelector('.elements__text').textContent = cardData.name;
    element.querySelector('.elements__image').src = cardData.link;
    element.querySelector('.elements__image').alt = cardData.name;
	element.querySelector('.elements__like').addEventListener('click', function(evt){
		evt.target.classList.toggle('elements__like_active'); 
	});
	element.querySelector('.elements__delete-button').addEventListener('click', function(evt){
		evt.target.closest('.elements__card').remove();
	});
    element.querySelector('.elements__image').addEventListener('click', function(evt){
        openPopup(popupFullImage);
        picture.src = evt.target.src;
        picture.alt = cardData.name;
        caption.textContent = cardData.name;
    });
	return element;
}

function createCards(){
	const placeElements = document.createDocumentFragment();
	initialCards.forEach(function (element, index) {
		placeElements.appendChild(createCard(element));
	});
	places.append(placeElements);
}
createCards();