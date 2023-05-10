import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe'); //доступ до айфрейму
const player = new Player(iframe); //новий клас
const CURRENT_TIME_KEY = 'videoplayer-current-time'; //ключ сховища

function onTimeUpdate(currentTime) {
  const currentSeconds = currentTime.seconds; //поточний час
  localStorage.setItem('CURRENT_TIME_KEY', JSON.stringify(currentSeconds)); //записали поточний час в локальне сховище
}

player.on('timeupdate', throttle(onTimeUpdate, 1000)); //ф-ція, яка оновлює час під час гри відео

player.setCurrentTime(
  JSON.parse(localStorage.getItem('CURRENT_TIME_KEY')) || 0); //забираємо час під час перезавантаження сторінки для відтворення на тому самому місці
