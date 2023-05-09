import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
let localStorageArray = {};

onDownload();

function onChangeForm(event) {
  localStorageArray[event.target.name] = event.target.value; //створили змінні для обєкту
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localStorageArray));
}

function onDownload() {
  let stateOfLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
  let parseStateOfLocalStorage = JSON.parse(stateOfLocalStorage); //забрали значення з сховища

  if (stateOfLocalStorage) {
    inputEl.value = parseStateOfLocalStorage.email;
    textareaEl.value = parseStateOfLocalStorage.message;
  } ///перевірка
}

function onSubmitForm(event) {
  event.preventDefault();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formEl.reset();
  console.log(localStorageArray);
}

formEl.addEventListener('input', throttle(onChangeForm, 500));
formEl.addEventListener('submit', onSubmitForm);
