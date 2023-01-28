import MovieApiService from './fetchMovieApi'
import {paginationMarkUp} from './pagination.js'
const refs = {
    formEl: document.querySelector('.js-header-form'),
    divEl: document.querySelector('.js-main-gallery'),
    paginationBox: document.querySelector('.pagination'),
}


const START_URL = 'https://image.tmdb.org/t/p/w500'
// МАЯК для кнопок пагінації, щоб знати, який фетч запускати: на тренти, чи по пошуку
let searchMarkPagination = 'trending'

const movieApiService = new MovieApiService();

saveGenresToLocalStorage();

refs.formEl.addEventListener('submit', onSearch);
refs.paginationBox.addEventListener('click', Onclick);

// Функція натискання на кнопки  пагінації
function Onclick(evt) {
  if (evt.target.textContent == '...') {
    console.log(`get...`);
    return;
  }
  if (evt.target.nodeName !== 'P') {
    console.log(`MISS`);
    return;
  }
  clearMarkup();
  console.log(evt.target.textContent);
  let currentPage = evt.target.textContent;
  movieApiService.newCurrentPage = currentPage;

          // перевіряємо, що ми шукаємо при натисканні на кнопки пагінації по МАЯКУ. 
          // В майбутньому вивести в окрему функцію
  
  
          if (searchMarkPagination === 'trending') {
            movieApiService.getTrendingMovies().then(data => {   
              saveTrendingToLocalStorage(data);
              createMainMarkup(data.results)
              console.log(data)
              paginationMarkUp(currentPage, data.total_pages);
            })
          }
          if (searchMarkPagination === 'search') {
            movieApiService.searchMovies().then(data => {
                    
              saveSearchResultToLocalStorage(data);
              createMainMarkup(data.results)
              console.log(data)
              paginationMarkUp(currentPage, data.total_pages);
            })
          }
}

movieApiService.getTrendingMovies().then(data => {
  movieApiService.resetCurrentPage();
  saveTrendingToLocalStorage(data);
  createMainMarkup(data.results)
  console.log(data)
  // При запуску сторіник малюємо пагінацію
  paginationMarkUp(1, data.total_pages);
})

function onSearch(evt) {
  evt.preventDefault();
  // Змінюємо маяк на "пошук", щоб при натисканні на пагінацію, запит йшов по пошуку
  searchMarkPagination = 'search'
  // Оновлюємо значення поточної сторінки через сетер класу MovieApiService
  movieApiService.resetCurrentPage();
  // Очищаємо розмітку
  clearMarkup();
  movieApiService.value = evt.currentTarget.elements.searchQuery.value;
  movieApiService.searchMovies().then(data => {
    // console.log(data);
    saveSearchResultToLocalStorage(data);
    createMainMarkup(data.results);
    // При пошуку фільмів малюємо пагінацію
    paginationMarkUp(1, data.total_pages);
  })
}

function createMainMarkup(dataArray) {
  const oneMarkup = obj => {
    // Функція для вибору жанрів з локал сторадж + умову на кількість жанрів
    checkGenresById(obj)
    // Записуємо дані рейтингу
    const ratingValue = obj.vote_average.toFixed(1);
    // Записуємо дату випуску
    const year = obj.release_date || obj.first_air_date || ''
           
    return ` <li class="card-wraper" id="${obj.id}">
       <img class="card-img" src="${START_URL}${obj.poster_path}" alt="#" />
       <div class="card-title">${obj.title || obj.name}</div>
      <div class="wraper">
         <div class="card-genre-wraper">
           <div class="card-genre">${checkGenresById(obj)}</div>
         </div>
         <div class="card-year">${year.slice(0,4)}</div>
         <div class="card-rating-wraper"><div class="card-rating">${ratingValue}</div></div>
       </div>
     </li>`;
  }

  const markup = dataArray.map(oneMarkup).join('');
  refs.divEl.insertAdjacentHTML('beforeend', markup);
}

// Функція збереження отриманих даних ЖАНРІВ фільмів в локалсторадж
function saveGenresToLocalStorage() {
  movieApiService.getGenres().then(data => {
    // console.log(data.genres)
    localStorage.setItem('GENRES_DATA_KEY', JSON.stringify(data.genres))
  })
}
// Функція збереження отриманих даних фільмів в ТРЕНДІ в локалсторадж
function saveTrendingToLocalStorage(data) {
 localStorage.setItem('TRENDING_DATA_KEY', JSON.stringify(data.results))
}

// Функція збереження отриманих даних фільмів по ПОШУКУ в локалсторадж
function saveSearchResultToLocalStorage(data) {
  localStorage.setItem('SEARCH_RESULT_DATA_KEY', JSON.stringify(data.results))
}
// Функція вибору потрібних жанрів  + умову на кількість жанрів
export function checkGenresById(obj) {
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
  
  let genresStr = '';
    if (genresArr.length === 0) {
        genresStr = 'Unknown genre'
    } else if (genresArr.length <= 2) {
        genresStr = genresArr.join(', ')
    } else {
      genresArr.splice(2, genresArr.length)
      genresStr = genresArr.join(', ') + ', Other'
    }
  return genresStr;
}
// Функція очистки маркапу
export function clearMarkup() {
    refs.divEl.innerHTML = ''
}
