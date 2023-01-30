import { checkGenresById } from "./markup_mainGallery";


let watched = localStorageObject('WATCHED_LIST_DATA_KEY');

function saveWatchedListToLocalStorage(data) {
  localStorage.setItem('WATCHED_LIST_DATA_KEY', JSON.stringify(data));
}

let queue = localStorageObject('QUEUE_LIST_DATA_KEY');

function saveQueueListToLocalStorage(data) {
  localStorage.setItem('QUEUE_LIST_DATA_KEY', JSON.stringify(data));
}

let currentId = null;
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
  console.log(parseObjectFromLs);
  return parseObjectFromLs;
}

function openModal(event) {
  console.log('openModal');

  if (watched === null) {
    watched = new Array();
  }
  
  if (queue === null) {
    queue = new Array();
  }



  const toWatchedBtn = document.querySelector('.js-btn-to-watched');
  const removeWatchedBtn = document.querySelector('.js-btn-from-watched');

  const toQueueBtn = document.querySelector('.js-btn-to-queue');
  const removeQueueBtn = document.querySelector('.js-btn-from-queue');

  toWatchedBtn.addEventListener('click', onToWatchedBtn);
  removeWatchedBtn.addEventListener('click', onRemoveWatchedBtn);

  toQueueBtn.addEventListener('click', onToQueueBtn);
  removeQueueBtn.addEventListener('click', onRemoveQueueBtn);



  closeModalBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', event => closeModalBackdrop(event));
  document.addEventListener('keydown', event => closeModalEsc(event));
  backdrop.classList.remove('is-hidden');
  setTimeout(() => {
    backdrop.firstElementChild.classList.remove('is-hidden');
  }, 350);
  document.body.classList.add('modal-open');
}



function onToWatchedBtn(event) {
  const button = event.currentTarget;

  console.log(button);
  const movieId = +button.id;
  console.log(movieId);
  console.log('onToWatchedBt entered');
  const data = findMovieById(movieId);
  const watchedFilms = localStorageObject('WATCHED_LIST_DATA_KEY') || [];
  console.log(watchedFilms)
  let alreadyExists = watchedFilms.find(item => item.id === movieId);

  if (!alreadyExists) {
    watchedFilms.push(data);
    saveWatchedListToLocalStorage(watchedFilms);
    console.log(`${movieId} added to watched`);
 //   'toWatchedBtn'.classList.add('is-hidden-btn');
    // 'removeWatchedBtn'.classList.remove('is-hidden-btn');
  }
}



function onRemoveWatchedBtn(event) {
  const button = event.currentTarget;

  const movieId = +button.id;
  console.log(movieId);
  console.log('onRemoveWatchedBtn entered');
  let isExist = watchedFilms.find(item => item.id === movieId);

  const watchedFilms = localStorageObject('WATCHED_LIST_DATA_KEY') || [];

  if (isExist) {
    watched.remove();
    const updatedFilms = watchedFilms.filter(item => item.id !== movieId);
    saveWatchedListToLocalStorage(updatedFilms);
    console.log(`${movieId} remove from watched`);
  }
}




function onToQueueBtn(event) {
  const button = event.currentTarget;

  console.log(button);
  const movieId = +button.id;
  console.log(movieId);
  console.log('onToQueueBtn entered');
  const data = findMovieById(movieId);
  const queuedFilms = localStorageObject('QUEUE_LIST_DATA_KEY') || [];
  const alreadyOnQueue = queuedFilms.find(item => item.id === movieId);

  if (!alreadyOnQueue) {
    queuedFilms.push(data);
    saveQueueListToLocalStorage(queuedFilms);
    console.log(`${movieId} added to queue`);

    // ('toQueueBtn');
    // ('removeQueueBtn');
  }
}



function onRemoveQueueBtn(event) {
  const button = event.currentTarget;
  const movieId = +button.id;
  console.log(idMovie);
  console.log('onRemoveQueueBtn entered');
  const queuedFilms = localStorageObject('QUEUE_LIST_DATA_KEY') || [];
  const isExist = queuedFilms.find(item => item.id === movieId);

  if (isExist) {
    queue.remove(movieId);
    const updatedFilms = watchedFilms.filter(item => item.id !== movieId);
    saveQueueListToLocalStorage(updatedFilms);
    console.log(`${movieId} remove from queue`);

    // ('toQueueBtn');
    // ('removeQueueBtn');
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
  const markup = `
      <div class='modal-movie-card__wrappe-img'>
                <img id="${
                  obj.id
                }" class="modal-movie-card__image" src="https://image.tmdb.org/t/p/w500${
    obj.poster_path
  }"
                    alt="#" />
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
                        <p>${checkGenresById(obj)}</p>
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
                    }' class='modal-movie-data__btn modal-movie-data__btn-watched active is-hidden-btn js-btn-from-watched' type='button' data-action='${
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
                    }' class='modal-movie-data__btn modal-movie-data__btn-queue active is-hidden-btn js-btn-from-queue' type='button' data-action='${
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
            </div>`;
  movieCard.innerHTML = markup;
}
