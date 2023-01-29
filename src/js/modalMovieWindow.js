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
    <div>
      <div>
        <img id="${obj.id}" class="card-img" src="https://image.tmdb.org/t/p/w500${obj.poster_path}" alt="#" />
      </div>
      <div >${obj.title || obj.name}</div>
      <div> 
      <div><p>Vote / Votes</p><p>${obj.vote}</p></div>
      <div><p>Popularity</p><p>${obj.popularity}</p></div>
      <div><p>Original Title</p><p>${obj.original_title}</p></div>
      <div><p>Genre</p><p></p></div>
      </div>
      <h3 class='modal-movie-data__about_title'>About</h3>
      <div>${obj.overview}</div>
      <div class='modal-movie-btn-wrapper' style='clear: both'>
        <button class='button-modal btn-to-watched' type='button' data-action='${obj.id}'>
            ADD TO WATCHED
        </button>
        <button class='button-modal btn-to-queue' type='button' data-action='${obj.id}'>
            ADD TO QUEUE
        </button>
        <button class='button-modal btn-to-watched' type='button' data-action='${obj.id}'>
            REMOVE FROM WATCHED
        </button>
        <button class='button-modal btn-to-queue' type='button' data-action='${obj.id}'>
            REMOVE FROM QUEUE
        </button>
      </div>
    </div>`

    movieCard.innerHTML = markup;
   }

 