let currentId = null;
const cardList = document.querySelector('.js-main-gallery');
const backdrop = document.querySelector('.backdrop-modal');
const closeModalBtn = document.querySelector('.button-close');
const movieCard = document.querySelector('.modal-movie-card');

const START_URL = 'https://image.tmdb.org/t/p/w500'

cardList.addEventListener('click', event => {
    if (event.target.nodeName !== 'BUTTON') {
        renderModal(event);
        console.log('hello')
    }
});

// cardList.addEventListener('click', openModal);

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
    if (event.target.nodeName === 'BUTTON') {
        return
    }
    const cardId = event.target.closest('li');
    const idMovie = cardId.id;
    const data = getFilmDetails(idMovie) //----- Невиходить повернути об'єкти з відповідним id.
    console.log(data)

    
    
    if (data) {
        currentId = data.id;
        // renderMovieCard(data);
        openModal(event);
    }
    
};


function checkGenresById(obj) {
  const savedGenresData = localStorage.getItem('GENRES_DATA_KEY')
  const parseGenresData = JSON.parse(savedGenresData)
  let genresArr = [];

    const genresIds = obj.genre_ids

    for (const parseGenre of parseGenresData) {
      
      if (genresIds.includes(parseGenre.id)) {
        genresArr.push(parseGenre.name)
      }
      
    }
    // console.log(genresArr)  
  
  const genresStr = genresArr.join(', ');
  return genresStr;
}

function getFilmDetails(idMovie) {
  const savedTrendingFilms = localStorage.getItem('TRENDING_DATA_KEY');
  const arrayMovies = JSON.parse(savedTrendingFilms);
  for (const arr of arrayMovies) {
    if (arr.id === idMovie) {
      return arr;
      break
    }   
    console.log(arr)
  }
}
