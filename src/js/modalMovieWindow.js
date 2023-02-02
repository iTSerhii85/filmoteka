import { checkGenresByIdModal } from './checkGenresById';
import no_image from '../images/no-image.jpg';

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

function saveWatchedListToLocalStorage(data) {
  localStorage.setItem('WATCHED_LIST_DATA_KEY', JSON.stringify(data));
}

function saveQueueListToLocalStorage(data) {
  localStorage.setItem('QUEUE_LIST_DATA_KEY', JSON.stringify(data));
}

let currentId;
let toWatchedBtn ;
let removeWatchedBtn ;
let toQueueBtn;
let removeQueueBtn;

const cardList = document.querySelector('.js-main-gallery');
const backdrop = document.querySelector('.backdrop-modal');
const closeModalBtn = document.querySelector('.button-close');
const movieCard = document.querySelector('.modal-movie-card');
cardList.addEventListener('click', event => {
  if (event.target.nodeName === 'IMG') {
    renderModal(event);
  }
});

function localStorageObject(key) {
  const getObjectFromLs = localStorage.getItem(key);
  const parseObjectFromLs = JSON.parse(getObjectFromLs);
  return parseObjectFromLs;
}

function openModal(event) {
  toWatchedBtn = document.querySelector('.js-btn-to-watched');
  removeWatchedBtn = document.querySelector('.js-btn-from-watched');
  toQueueBtn = document.querySelector('.js-btn-to-queue');
  removeQueueBtn = document.querySelector('.js-btn-from-queue');

  currentId = +toWatchedBtn.id;

  toWatchedBtn.addEventListener('click', onToWatchedBtn);
  removeWatchedBtn.addEventListener('click', onRemoveWatchedBtn);

  toQueueBtn.addEventListener('click', onToQueueBtn);
  removeQueueBtn.addEventListener('click', onRemoveQueueBtn);
  handlingButton();
  closeModalBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', event => closeModalBackdrop(event));
  document.addEventListener('keydown', event => closeModalEsc(event));
  backdrop.classList.remove('is-hidden');
  setTimeout(() => {
    backdrop.firstElementChild.classList.remove('is-hidden');
  }, 350);
  document.body.classList.add('modal-open');
}

function handlingButton() {
  const watchedFilms = localStorageObject('WATCHED_LIST_DATA_KEY') || [];
  const queuedFilms = localStorageObject('QUEUE_LIST_DATA_KEY') || [];
  let alreadyWatchedExists = watchedFilms.find(item => item.id === currentId);
  const alreadyOnQueue = queuedFilms.find(item => item.id === currentId);

  if (watchedFilms.length === 0 || !alreadyWatchedExists) {
    hide(removeWatchedBtn);
  }
  if (queuedFilms.length === 0 || !alreadyOnQueue) {
    hide(removeQueueBtn);
  }

  if (alreadyWatchedExists) {
    hide(toWatchedBtn);
  }
  if (alreadyOnQueue) {
    hide(toQueueBtn);
  }
}
  function hide(button) {
    button.style.display = 'none';
  }

  function show(button) {
    button.style.display = '';
  }

function onToWatchedBtn(event) {
  const data = findMovieById(currentId);
  const watchedFilms = localStorageObject('WATCHED_LIST_DATA_KEY') || [];
  let alreadyExists = watchedFilms.find(item => item.id === currentId);

  if (!alreadyExists) {
    watchedFilms.push(data);
    saveWatchedListToLocalStorage(watchedFilms);

    hide(toWatchedBtn);
    show(removeWatchedBtn);
  }
}

function onRemoveWatchedBtn() {
  const watchedFilms = localStorageObject('WATCHED_LIST_DATA_KEY') || [];
  let isExist = watchedFilms.find(item => item.id === currentId);

  if (isExist) {
  const updatedFilms = watchedFilms.filter(item => item.id !== currentId);
    saveWatchedListToLocalStorage(updatedFilms);

       hide(removeWatchedBtn);
       show(toWatchedBtn);
  }
}

function onToQueueBtn() {
  const data = findMovieById(currentId);

  const queuedFilms = localStorageObject('QUEUE_LIST_DATA_KEY') || [];
  const alreadyOnQueue = queuedFilms.find(item => item.id === currentId);

  if (!alreadyOnQueue) {
    queuedFilms.push(data);
    saveQueueListToLocalStorage(queuedFilms);

    hide(toQueueBtn);
    show(removeQueueBtn);
  }
}

function onRemoveQueueBtn() {
  const queuedFilms = localStorageObject('QUEUE_LIST_DATA_KEY') || [];
  const isExist = queuedFilms.find(item => item.id === currentId);

  if (isExist) {
    const updatedFilms = queuedFilms.filter(item => item.id !== currentId);
    saveQueueListToLocalStorage(updatedFilms);

      hide(removeQueueBtn);
      show(toQueueBtn);
  }
}

function closeModal(event) {
  backdrop.classList.add('is-hidden');
  backdrop.firstElementChild.classList.remove('is-hidden');
  closeModalBtn.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', event => closeModalEsc(event));
  document.body.classList.remove('modal-open');
  backdrop.style.background = '';

  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

function closeModalBackdrop(event) {
  if (event.target.classList.value !== 'backdrop-modal') {
    return;
  }
  closeModal();
}

function closeModalEsc(event) {
  if (event.key !== 'Escape') {
    return;
  }
  closeModal();
}

const renderModal = event => {

  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;

  const cardId = event.target.closest('li');
  const idMovie = cardId.id;
  const data = findMovieById(idMovie);
  if (data) {
    currentId = data.id;
    renderMovieCard(data);
    openModal(event);
  }
};

function findMovieById(idMovie) {
  const savedTrendingFilms = localStorage.getItem('TRENDING_DATA_KEY');
  const arrayMovies = JSON.parse(savedTrendingFilms);
  const data = arrayMovies.find(arr => arr.id === Number(idMovie));
  return data;
}

function renderMovieCard(obj) {
  const backdropImage = obj.backdrop_path;
  if (backdropImage !== null) {
    const background = `https://image.tmdb.org/t/p/original/${obj.backdrop_path}`;
    backdrop.style.backgroundImage = `url('${background}')`;
    backdrop.style.backgroundSize = 'cover';
    backdrop.style.backgroundPosition = '50% 50%';
  }
  mark(obj);
}

function mark(obj) {
  const START_URL = 'https://image.tmdb.org/t/p/w500';
  let posterSrc = '';
    if (obj.poster_path) {
      posterSrc = `${START_URL}${obj.poster_path}`    
    } else {
      posterSrc = no_image;
  }
  
  const markup = `
      <div class='modal-movie-card__wrappe-img'>
                <img id="${
                  obj.id
                }" class="modal-movie-card__image" src="${
    posterSrc}" alt="${obj.title || obj.name}" />
            </div>
            <div class='modal-movie-data'>
                <h2 class='modal-movie-data__title'>${
                  obj.title || obj.name
                }</h2>
            <table class='modal-movie-data-table'>
                <tr class='modal-movie-data-table__row'>
                    <td>
                        <p class='modal-movie-data__attribute'>Vote / Votes</p>
                    </td>
                    <td>
                        <p><span class='modal-movie-data__vote'>${
                          obj.vote_average.toFixed(1)
                        }</span> / ${obj.vote_count}</p>
                    </td>
                </tr>
                <tr class='modal-movie-data-table__row'>
                    <td>
                        <p>Popularity</p>
                    </td>
                    <td>
                        <p>${obj.popularity.toFixed(1)}</p>
                    </td>
                </tr>
                <tr class='modal-movie-data-table__row'>
                    <td>
                        <p>Original Title</p>
                    </td>
                    <td>
                        <p>${obj.original_title}</p>
                    </td>
                </tr>
                <tr class='modal-movie-data-table__row'>
                    <td>
                        <p>Genre</p>
                    </td>
                    <td>
                        <p>${checkGenresByIdModal(obj)}</p>
                    </td>
                </tr>
            </table>
            <h3 class='modal-movie-data__about_title'>About</h3>
            <p class='modal-movie-data__about'>${obj.overview}</p>
            <ul class='modal-movie-data__btn-list'>
                <li class='modal-movie-data__btn-item'  >
                    <button id='${
                      obj.id
                    }' class='modal-movie-data__btn modal-movie-data__btn-watched js-btn-to-watched' type='button' data-action='${
    obj.id
  }'   >
                        ADD TO WATCHED
                    </button>
                    <button  id='${
                      obj.id
                    }' class='modal-movie-data__btn modal-movie-data__btn-watched active js-btn-from-watched' type='button' data-action='${
    obj.id
  }'>
                        REMOVE FROM WATCHED
                    </button>
                </li>
                <li class='modal-movie-data__button-item' >
                    <button  id='${
                      obj.id
                    }' class='modal-movie-data__btn modal-movie-data__btn-queue js-btn-to-queue' type='button' data-action='${
    obj.id
  }'>
                        ADD TO QUEUE
                    </button>
                    <button id='${
                      obj.id
                    }' class='modal-movie-data__btn modal-movie-data__btn-queue active js-btn-from-queue' type='button' data-action='${
    obj.id
  }'>
                        REMOVE FROM QUEUE
                    </button>
                </li>
            </ul>
            <div class="trailer-btn-wrapper">
            <button  id='${
                      obj.id
                    }' class='trailer-btn' type='button' data-action='${
    obj.id
  }'>
                        watch trailer
                    </button>
            </div>
            </div>
            <div class="backdrop-modal-trailer is-hidden">
    <div class="trailer-player-wrapper">
      <iframe class="trailer-player" width="320" height="240" src="https://www.youtube.com/embed" title="" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <button class="btnClose" type="button">
        <svg class="btnClose__icon-close" width="30" height="30" aria-label=" button close">
          <use href="./images/svg/sprite.svg#icon-close"></use>
        </svg>
      </button>
    </div>
  </div>`;
  movieCard.innerHTML = markup;
}
