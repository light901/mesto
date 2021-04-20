const showInputError = (formElement, inputElement, errorMessage, validateConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validateConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validateConfig.errorClass);
};

const hideInputError = (formElement, inputElement, validateConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validateConfig.inputErrorClass);
  errorElement.classList.remove(validateConfig.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validateConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validateConfig);
  } else {
    hideInputError(formElement, inputElement, validateConfig);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
const toggleButtonState = (inputList, buttonElement, validateConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validateConfig.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validateConfig.inactiveButtonClass);
  } 
}
const setEventListeners = (formElement, validateConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validateConfig.inputSelector));
  const buttonElement = formElement.querySelector(validateConfig.formSubmit);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validateConfig);
      toggleButtonState(inputList, buttonElement, validateConfig);
    });
  });
};

const enableValidation = (validateConfig) => {
  const formList = Array.from(document.querySelectorAll(validateConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
	
	const fieldsetList = Array.from(document.querySelectorAll(validateConfig.formSet));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet, validateConfig);
    });
  });
};
const validatevalidateConfigig = {
    formSelector: '.form',
    formSet: '.form__set',
    formSubmit: '.form__submit',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
}; 
enableValidation(validatevalidateConfigig);