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
  closeModalBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', event => closeModalBackdrop(event));
  document.addEventListener('keydown', event => closeModalEsc(event));
  backdrop.classList.remove('is-hidden');
  setTimeout(() => {
    backdrop.firstElementChild.classList.remove('is-hidden');
  }, 350);
  document.body.classList.add('modal-open');
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
    const cardId = event.target.closest('li');
    const idMovie = cardId.id;
    const savedTrendingFilms = localStorage.getItem('TRENDING_DATA_KEY');
    const arrayMovies = JSON.parse(savedTrendingFilms);
    const data = arrayMovies.find(arr => arr.id === Number(idMovie));
    console.log(data)
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
    mark(obj)
  }
   function mark (obj){
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
                <li class='modal-movie-data__btn-item'>
                    <button class='modal-movie-data__btn modal-movie-data__btn-watched js-btn-to-watched' type='button' data-action='${
                      obj.id
                    }'>
                        ADD TO WATCHED
                    </button>
                    <button class='modal-movie-data__btn modal-movie-data__btn-watched is-hidden-btn' type='button' data-action='${obj.id}'>
                        REMOVE FROM WATCHED
                    </button>
                </li>
                <li class='modal-movie-data__button-item'>
                    <button class='modal-movie-data__btn modal-movie-data__btn-queue js-btn-to-queue' type='button' data-action='${
                      obj.id
                    }'>
                        ADD TO QUEUE
                    </button>
                    <button class='modal-movie-data__btn modal-movie-data__btn-queue is-hidden-btn' type='button' data-action='${obj.id}'>
                        REMOVE FROM QUEUE
                    </button>
                </li>
            </ul>
            </div>`
    movieCard.innerHTML = markup;
   }