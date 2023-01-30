let watched = new Array();

function saveWatchedListToLocalStorage(data) {
  localStorage.setItem('WATCHED_LIST_DATA_KEY', JSON.stringify(data));
}

let queue = new Array();

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
function openModal(event) {
  console.log('openModal');

  let watchedListFromLocalStorage = localStorage.getItem('WATCHED_LIST_DATA_KEY');
  if (watchedListFromLocalStorage != null) {
    watched = JSON.parse(watchedListFromLocalStorage);
  }

   let queueListFromLocalStorage = localStorage.getItem('QUEUE_LIST_DATA_KEY');
   if (queueListFromLocalStorage != null) {
     queue = JSON.parse(queueListFromLocalStorage);
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
  const idMovie = button.id;
  console.log(idMovie);
  console.log('onToWatchedBt entered');
  let alreadyExists = watched.find(element => element === idMovie);

  if (typeof alreadyExists === 'undefined') {
    watched.push(idMovie);
    saveWatchedListToLocalStorage(watched);
    console.log(`${idMovie} added to watched`);

    // 'toWatchedBtn';
    // 'removeWatchedBtn';

    return;
  }
  return;
}

function onRemoveWatchedBtn(event) {
  const button = event.currentTarget;

  const idMovie = button.id;
  console.log(idMovie);
  console.log('onRemoveWatchedBtn entered');
  let alreadyExists = watched.find(element => element === idMovie);

  if (typeof alreadyExists === 'fined') {
    watched.remove(idMovie);
    console.log(`${idMovie} remove from watched`);

    ('toWatchedBtn');
    ('removeWatchedBtn');

    return;
  }
  return;
}

function onToQueueBtn(event) {
  const button = event.currentTarget;

  console.log(button);
  const idMovie = button.id;
  console.log(idMovie);
  console.log('onToQueueBtn entered');
  let alreadyQueue = queue.find(element => element === idMovie);

  if (typeof alreadyQueue === 'undefined') {
    queue.push(idMovie);
    saveQueueListToLocalStorage(queue);
    console.log(`${idMovie} added to queue`);

    // ('toQueueBtn');
    // ('removeQueueBtn');

    return;
  }
  return;
}

function onRemoveQueueBtn(event) {
  const button = event.currentTarget;

  const idMovie = button.id;
  console.log(idMovie);
  console.log('onRemoveQueueBtn entered');
  let alreadyQueue = queue.find(element => element === idMovie);

  if (typeof alreadyQueue === 'fined') {
    queue.remove(idMovie);
    console.log(`${idMovie} remove from queue`);

    ('toQueueBtn');
    ('removeQueueBtn');

    return;
  }
  return;
}

function closeModal(event) {
  backdrop.classList.add('is-hidden');
  backdrop.firstElementChild.classList.remove('is-hidden');
  closeModalBtn.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', event => closeModalEsc(event));
  document.body.classList.remove('modal-open');
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
  console.log('renderModal');
  const cardId = event.target.closest('li');
  const idMovie = cardId.id;
  const savedTrendingFilms = localStorage.getItem('TRENDING_DATA_KEY');
  const arrayMovies = JSON.parse(savedTrendingFilms);
  const data = arrayMovies.find(arr => arr.id === Number(idMovie));
  console.log(data);
  if (data) {
    currentId = data.id;
    renderMovieCard(data);
    openModal(event);
  }
};
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
                          obj.vote_average
                        }</span> / ${obj.vote_count}</p>
                    </td>
                </tr>
                <tr class='modal-movie-data-table__row'>
                    <td>
                        <p>Popularity</p>
                    </td>
                    <td>
                        <p>${obj.popularity}</p>
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
                        <p>підставити жанри замість id: ${obj.genre_ids}</p>
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
                    }' class='modal-movie-data__btn modal-movie-data__btn-watched is-hidden-btn js-btn-from-watched' type='button' data-action='${
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
                    }' class='modal-movie-data__btn modal-movie-data__btn-queue is-hidden-btn js-btn-from-queue' type='button' data-action='${
    obj.id
  }'>
                        REMOVE FROM QUEUE
                    </button>
                </li>
            </ul>
            </div>`;
  movieCard.innerHTML = markup;
}
