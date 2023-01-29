import MovieApiService from './fetchMovieApi';

const refs = {
  formEl: document.querySelector('.js-header-form'),
  divEl: document.querySelector('.js-main-gallery'),
};

const START_URL = 'https://image.tmdb.org/t/p/w500';

const movieApiService = new MovieApiService();

refs.formEl.addEventListener('submit', onSearch);

saveGenresToLocalStorage();

// console.log(parseGenresData)

movieApiService.getTrendingMovies().then(data => {
  movieApiService.resetCurrentPage();
  saveTrendingToLocalStorage(data);
  createMarkup(data.results);
});

function onSearch(evt) {
  evt.preventDefault();
  movieApiService.resetCurrentPage();
  clearMarkup();
  movieApiService.value = evt.currentTarget.elements.searchQuery.value;
  movieApiService.searchMovies().then(data => {
    // console.log(data);
    saveSearchResultToLocalStorage(data);
    createMarkup(data.results);
  });
}

function createMarkup(dataArray) {
  const oneMarkup = obj => {
    // Функція для вибору жанрів з локал сторадж + умову на кількість жанрів
    checkGenresById(obj);
    // Записуємо дані рейтингу
    const ratingValue = obj.vote_average.toFixed(1);
    // Записуємо дату випуску
    const year = obj.release_date || obj.first_air_date || '';

    return ` <li class="card-wraper" id="${obj.id}">
       <img class="card-img" src="${START_URL}${obj.poster_path}" alt="#" />
       <div class="card-title">${obj.title || obj.name}</div>
      <div class="wraper">
         <div class="card-genre-wraper">
           <div class="card-genre">${checkGenresById(obj)}</div>
         </div>
         <div class="card-year">${year.slice(0, 4)}</div>
         <div class="card-rating-wraper"><div class="card-rating">${ratingValue}</div></div>
       </div>
     </li>`;
  };

  const markup = dataArray.map(oneMarkup).join('');
  refs.divEl.insertAdjacentHTML('beforeend', markup);
}

function saveGenresToLocalStorage() {
  movieApiService.getGenres().then(data => {
    // console.log(data.genres)
    localStorage.setItem('GENRES_DATA_KEY', JSON.stringify(data.genres));
  });
}

function saveTrendingToLocalStorage(data) {
  localStorage.setItem('TRENDING_DATA_KEY', JSON.stringify(data.results));
}

function saveSearchResultToLocalStorage(data) {
  localStorage.setItem('SEARCH_RESULT_DATA_KEY', JSON.stringify(data.results));
}

function checkGenresById(obj) {
  const savedGenresData = localStorage.getItem('GENRES_DATA_KEY');
  const parseGenresData = JSON.parse(savedGenresData);
  let genresArr = [];

  const genresIds = obj.genre_ids;

  for (const parseGenre of parseGenresData) {
    if (genresIds.includes(parseGenre.id)) {
      genresArr.push(parseGenre.name);
    }
  }
  // console.log(genresArr)

  let genresStr = '';
  if (genresArr.length === 0) {
    genresStr = 'Unknown genre';
  } else if (genresArr.length <= 2) {
    genresStr = genresArr.join(', ');
  } else {
    genresArr.splice(2, genresArr.length);
    genresStr = genresArr.join(', ') + ', Other';
  }
  return genresStr;
}

function clearMarkup() {
  refs.divEl.innerHTML = '';
}


