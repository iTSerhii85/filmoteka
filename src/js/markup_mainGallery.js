import MovieApiService from './fetchMovieApi'

const refs = {
    formEl: document.querySelector('.js-header-form'),
    divEl: document.querySelector('.js-main-gallery'),
  
}

const START_URL = 'https://image.tmdb.org/t/p/w500'

const movieApiService = new MovieApiService();
refs.formEl.addEventListener('submit', onSearch);


saveGenresToLocalStorage();


movieApiService.getTrendingMovies().then(data => {
  
  saveTrendingToLocalStorage();
  createMarkup(data.results)
  
})

function onSearch(evt) {
  evt.preventDefault();
  clearMarkup();
  movieApiService.value = evt.currentTarget.elements.searchQuery.value;
  movieApiService.searchMovies().then(data => {
    console.log(data);
    saveSearchResultToLocalStorage();
    createMarkup(data.results);
  })
}

function createMarkup(dataArray) {
  const oneMarkup = obj => {
    return ` <div class="card-wraper">
       <img class="card-img" src="${START_URL}${obj.poster_path}" alt="#" />
       <div class="card-title">${obj.title || obj.name}</div>
      <div class="wraper">
         <div class="card-genre-wraper">
           <div class="card-genre">genre</div>
         </div>
         <div class="card-year">year</div>
         <div class="card-rating-wraper"><div class="card-rating">${obj.vote_average}</div></div>
       </div>
     </div>`;
  }

  const markup = dataArray.map(oneMarkup).join('');
  refs.divEl.insertAdjacentHTML('beforeend', markup);
}


function saveGenresToLocalStorage() {
  movieApiService.getGenres().then(data => {
    // console.log(data.genres)
    localStorage.setItem('GENRES_DATA_KEY', JSON.stringify(data.genres))

    // const savedData = localStorage.getItem('GENRES_DATA')
    // const parseData = JSON.parse(savedData)
    // console.log(parseData)
    
  })
}

function saveTrendingToLocalStorage() {
  movieApiService.getTrendingMovies().then(data => {
    // console.log(data.genres)
    localStorage.setItem('TRENDING_DATA_KEY', JSON.stringify(data.results))
  })
}

function saveSearchResultToLocalStorage() {
  movieApiService.searchMovies().then(data => {
    localStorage.setItem('SEARCH_RESULT_DATA_KEY', JSON.stringify(data.results))
 
  })
}




// function checkGenresById(arr) {
//   console.log(arr)
// }

function clearMarkup() {
    refs.divEl.innerHTML = ''
}