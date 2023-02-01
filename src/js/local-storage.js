import no_image from '../images/no-image.jpg';
import { checkGenresById } from './checkGenresById.js';

const watchedLibBtn = document.querySelector('.js-watched-lib-btn');
const queueLibBtn = document.querySelector('.js-queue-lib-btn');
const libraryBox = document.querySelector('.js-library-gallery');
const emptyGalleryBox = document.querySelector('.info-notify-box');
const emptyGalleryText = document.querySelector('.info-notify-text');

// Функція розпарсить об'єкти з localStorage
function localStorageObject(key) {
  const getObjectFromLs = localStorage.getItem(key);
  const parseObjectFromLs = JSON.parse(getObjectFromLs);
  // console.log(parseObjectFromLs);

  return parseObjectFromLs;
}

// ключі від localStorage
const watchedArray = localStorageObject('WATCHED_LIST_DATA_KEY');
const queueArray = localStorageObject('QUEUE_LIST_DATA_KEY');

// Рендерить розмітку у бібліотеці по дефолту
renderLibrary(watchedArray);
watchedLibBtn.classList.add('btn-is-active');

// Функція для рендуру розмітки
export function renderLibrary(arrayMovies) {
  if (!arrayMovies || !arrayMovies.length) {
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
}

watchedLibBtn.addEventListener('click', onClickWatched);
queueLibBtn.addEventListener('click', onClickQueue);

export function onClickWatched() {
  watchedLibBtn.classList.add('btn-is-active');
  queueLibBtn.classList.remove('btn-is-active');
  emptyGalleryBox.classList.add('is-hidden');

  const getObjectFromLs = localStorage.getItem('WATCHED_LIST_DATA_KEY');
  const parseObjectFromLs = JSON.parse(getObjectFromLs);
  renderLibrary(parseObjectFromLs);
}

export function onClickQueue() {
  emptyGalleryBox.classList.add('is-hidden');
  queueLibBtn.classList.add('btn-is-active');
  watchedLibBtn.classList.remove('btn-is-active');

  const getObjectFromLs = localStorage.getItem('QUEUE_LIST_DATA_KEY');
  const parseObjectFromLs = JSON.parse(getObjectFromLs);
  renderLibrary(parseObjectFromLs);
}

function clearMarkup() {
  libraryBox.innerHTML = '';
}
