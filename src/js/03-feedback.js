import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
let userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

formEl.addEventListener('input', throttle(onChangeForm, 500));
formEl.addEventListener('submit', onSubmitForm);

onDownload();

function onChangeForm(event) {
  userData.email = inputEl.value;
  userData.message = textareaEl.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
}

function onDownload() {
  let stateOfLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
  let parseStateOfLocalStorage = JSON.parse(stateOfLocalStorage); //забрали значення з сховища

  if (stateOfLocalStorage) {
    inputEl.value = parseStateOfLocalStorage.email || '';
    textareaEl.value = parseStateOfLocalStorage.message || '';
    return;
  }
}

function onSubmitForm(event) {
  event.preventDefault(); //відмінили перезагрузку

  if (!inputEl.value) {
    return alert('Please write your email');
  }

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formEl.reset();

  console.log(userData);
}
