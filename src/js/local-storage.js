import no_image from '../images/no-image.jpg';
import { checkGenresById } from './checkGenresById';

// !!!!!!!!!!добавил это  !!!!!!!!!!!!!!!!

import { paginationMarkUp } from './pagination.js';
const paginationBox = document.querySelector('.pagination');
let currentPage = 1;
let maxPage = 1;

// -----------------------

const watchedLibBtn = document.querySelector('.js-watched-lib-btn');
const queueLibBtn = document.querySelector('.js-queue-lib-btn');
const libraryBox = document.querySelector('.js-library-gallery');
const emptyGalleryBox = document.querySelector('.info-notify-box');
const emptyGalleryText = document.querySelector('.info-notify-text');

let movieArray = [];

window.addEventListener('load', function () {
  setTimeout(function () {
    watchedLibBtn.click();
  }, 0);
});

// Функція розпарсить об'єкти з localStorage
function localStorageObject(key) {
  const getObjectFromLs = localStorage.getItem(key);
  const parseObjectFromLs = JSON.parse(getObjectFromLs);
  if (!parseObjectFromLs) {
    return;
  } else {
    maxPage = Math.ceil(parseObjectFromLs.length / 20);
    paginationMarkUp(currentPage, maxPage);
  }
  return parseObjectFromLs;
}

// ключі від localStorage
const watchedArray = localStorageObject('WATCHED_LIST_DATA_KEY');
const queueArray = localStorageObject('QUEUE_LIST_DATA_KEY');

// Рендерить розмітку у бібліотеці по дефолту
let startPoint = (currentPage - 1) * 20;
let stopPoint = (currentPage - 1) * 20 + 20;
const beforeArrey = watchedArray;
const watchedArr = beforeArrey.slice(startPoint, stopPoint);
const beforeArreyQe = queueArray;
const watchedArrQe = beforeArreyQe.slice(startPoint, stopPoint);

watchedLibBtn.classList.add('btn-is-active');
// paginationBox.addEventListener('click', Onclick);

// Функція для рендуру розмітки

function renderLibrary(arrayMovies) {
  if (!arrayMovies) {
    clearMarkup();
    return emptyGalleryBox.classList.remove('is-hidden');
  }

  const markupOneCard = obj => {
    clearMarkup();
    checkGenresById(obj);

    let posterSrc = '';
    if (obj.poster_path) {
      posterSrc = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
    } else {
      posterSrc = no_image;
    }

    return ` <li class="card-wraper" id="${obj.id}">
       <a class="card-wraper_link" href="#"><img class="card-img" src="${posterSrc}" alt="${
      obj.title || obj.name
    }"/></a>
       <div class="card-title">${obj.title || obj.name}</div>
      <div class="wraper">
         <div class="card-genre-wraper">
           <div class="card-genre">${checkGenresById(obj)}</div>
         </div>
         <div class="card-year">

         ${obj.release_date.slice(0, 4) || obj.first_air_date.slice(0, 4) || ''}

         </div>
         <div class="card-rating-wraper"><div class="card-rating">${obj.vote_average.toFixed(
           1
         )}</div></div>
       </div>
     </li>`;
  };

  const libraryMarkup = arrayMovies.map(markupOneCard).join('');
  libraryBox.insertAdjacentHTML('beforeend', libraryMarkup);

  // !!!!!!!!!!добавил это  !!!!!!!!!!!!!!!!

  // -----------------------
}

watchedLibBtn.addEventListener('click', onClickWatched);
queueLibBtn.addEventListener('click', onClickQueue);

function onClickWatched() {
  // !!!!!!!!!!добавил это  !!!!!!!!!!!!!!!!
  currentPage = 1;
  let arr = localStorage.getItem('WATCHED_LIST_DATA_KEY');
  let parsedArr = JSON.parse(arr);
  maxPage = Math.ceil(parsedArr.length / 20);
  paginationMarkUp(currentPage, maxPage);

  // -----------------------

  watchedLibBtn.classList.add('btn-is-active');
  queueLibBtn.classList.remove('btn-is-active');
  emptyGalleryBox.classList.add('is-hidden');
  renderLibrary(watchedArr);
}

function onClickQueue() {
  // !!!!!!!!!!добавил это  !!!!!!!!!!!!!!!!
  currentPage = 1;
  let arr = localStorage.getItem('QUEUE_LIST_DATA_KEY');
  let parsedArr = JSON.parse(arr);
  maxPage = Math.ceil(parsedArr.length / 20);
  paginationMarkUp(currentPage, maxPage);
  // -----------------------

  emptyGalleryBox.classList.add('is-hidden');
  queueLibBtn.classList.add('btn-is-active');
  watchedLibBtn.classList.remove('btn-is-active');
  renderLibrary(watchedArrQe);
}

function clearMarkup() {
  libraryBox.innerHTML = '';
}

// !!!!!!!!!!добавил это  !!!!!!!!!!!!!!!!
paginationBox.addEventListener('click', Onclick);

function Onclick(evt) {
  if (evt.target.textContent == '...') {
    return;
  }
  if (evt.target.nodeName !== 'P') {
    return;
  }

  currentPage = evt.target.textContent;

  if (evt.target.textContent == '>>') {
    currentPage = Number(targetPage.textContent) + 1;
  }

  if (evt.target.textContent == '<<') {
    currentPage = Number(targetPage.textContent) - 1;
  }

  paginationMarkUp(currentPage, maxPage);
  reRendering(currentPage);

  // И вот тут отрисовываем карточки из массива по интексам   <<<<<-----------

  function reRendering(currentPage) {
    let startPoint = (currentPage - 1) * 20;
    let stopPoint = (currentPage - 1) * 20 + 20;

    if (watchedLibBtn.classList.contains('btn-is-active')) {
      const beforeArrey = watchedArray;
      const watchedArr = beforeArrey.slice(startPoint, stopPoint);
      renderLibrary(watchedArr);
    } else {
      const beforeArrey = queueArray;
      const watchedArr = beforeArrey.slice(startPoint, stopPoint);
      renderLibrary(watchedArr);
    }
  }
}
// -----------------------
