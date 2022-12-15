// Задание 1 - библиотека SimpleLightbox
// 1. Добавь библиотеку SimpleLightbox как зависимость проекта 
// используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// 2. Используй свой JavaScript код из предыдущей домашней работы, 
// но выполни рефакторинг с учетом того, что библиотека была 
// установлена через npm (синтаксис import/export).
// 3. Для того чтобы подключить CSS код библиотеки в проект, необходимо 
// добавить еще один импорт, кроме того который описан в документации.

// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function createMarkupGallery (arr) {
    return arr
    .map(({preview, original, description}) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
    .join("");
}; 

const marcupGalleryItems = createMarkupGallery(galleryItems);
galleryEl.innerHTML = marcupGalleryItems;

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

// Change code below this line

console.log(galleryItems);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Напиши скрипт который будет сохранять текущее время воспроизведения
//  видео в локальное хранилище и, при перезагрузке страницы, 
//  продолжать воспроизводить видео с этого времени.

// 1) Ознакомься с документацией библиотеки Vimeo плеера.
// 2) Добавь библиотеку как зависимость проекта через npm.
// 3) Инициализируй плеер в файле скрипта как это описано в секции 
// pre-existing player, но учти что у тебя плеер добавлен как 
// npm пакет, а не через CDN.
// 4) Разбери документацию метода on() и начни отслеживать событие 
// timeupdate - обновление времени воспроизведения.
// 5) Сохраняй время воспроизведения в локальное хранилище. 
// Пусть ключом для хранилища будет строка "videoplayer-current-time".
// 6) При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.
// 7) Добавь в проект библиотеку lodash.throttle и сделай так, чтобы 
// время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

import Vimeo from '@vimeo/player';

const vimeoPlayerEl = document.querySelector('#vimeo-player');
const vimeoPlayer = new Vimeo(vimeoPlayerEl);
// console.log(vimeoPlayerEl);
// console.log(vimeoPlayer);
const throttler = require('lodash.throttle');
// console.log(throttler);

vimeoPlayer.on('timeupdate', throttler(onPlay, 1000));

function onPlay(data) {
    // console.log(`it's working`);
    localStorage.setItem('videoplayer-current-time', Math.round(data.seconds));
}

const playerCurrentTime = localStorage.getItem('videoplayer-current-time');
// console.log(`I see playerCurrentTime: ${playerCurrentTime}`);

if (playerCurrentTime) {
    vimeoPlayer.setCurrentTime(playerCurrentTime);
}

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Напиши скрипт который будет сохранять значения полей 
// в локальное хранилище когда пользователь что-то печатает.

// 1) Отслеживай на форме событие input, и каждый раз записывай 
// в локальное хранилище объект с полями email и message, 
// в которых сохраняй текущие значения полей формы. 
// Пусть ключом для хранилища будет строка "feedback-form-state".

// 2) При загрузке страницы проверяй состояние хранилища, и если 
// там есть сохраненные данные, заполняй ими поля формы. 
// В противном случае поля должны быть пустыми.

// 3) При сабмите формы очищай хранилище и поля формы, а также 
// выводи объект с полями email, message и текущими их значениями в консоль.

// 4) Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
//  Для этого добавь в проект и используй библиотеку lodash.throttle.

const throttler = require('lodash.throttle');

const refs = {
  feedbackFormEl: document.querySelector(".feedback-form"),
  inputEmailEl: document.querySelector("input[name=email]"),
  textareaEl: document.querySelector("textarea[name=message]"),
};

let feedbackFormObject = {};

refs.feedbackFormEl.addEventListener("input", throttler(onFeedbackFormInput, 500));

function onFeedbackFormInput(e) {
  feedbackFormObject[e.target.name] = e.target.value;

  let localStorageObject = JSON.stringify(feedbackFormObject);
  localStorage.setItem("feedback-form-state", localStorageObject);
}

window.addEventListener("load", onFeedbackFormReplay);

function onFeedbackFormReplay() {
  if (!localStorage.getItem("feedback-form-state")) {
    return;
  }

  let parsedLocalStorageObject = JSON.parse(localStorage.getItem("feedback-form-state"));

  if (parsedLocalStorageObject.email) {
    feedbackFormObject.email = parsedLocalStorageObject.email;
    refs.inputEmailEl.value = parsedLocalStorageObject.email;
  }

  if (parsedLocalStorageObject.message) {
    feedbackFormObject.message = parsedLocalStorageObject.message;
    refs.textareaEl.value = parsedLocalStorageObject.message;
  }
}

refs.feedbackFormEl.addEventListener("submit", onFeedbackFormReset);

function onFeedbackFormReset(e) {
  e.preventDefault();

  let parsedLocalStorageObject = JSON.parse(localStorage.getItem("feedback-form-state"));

  if (parsedLocalStorageObject) {
    console.log(parsedLocalStorageObject);
  }

  refs.feedbackFormEl.reset();
  localStorage.removeItem("feedback-form-state");
  feedbackFormObject = {};
}

