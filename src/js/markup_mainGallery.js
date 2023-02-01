import MovieApiService from './fetchMovieApi';
import { paginationMarkUp } from './pagination.js';
import { checkGenresById } from './checkGenresById';
import no_image from '../images/no-image.jpg';

const refs = {
  formEl: document.querySelector('.js-header-form'),
  divEl: document.querySelector('.js-main-gallery'),
  searchBtn: document.querySelector('.search-btn'),
  paginationBox: document.querySelector('.pagination'),
  targetPage: document.querySelector('.targetPage'),
  formMessage: document.querySelector('.header-form__message'),
};
const movieApiService = new MovieApiService();
// МАЯК для кнопок пагінації, щоб знати, який фетч запускати: на тренти, чи по пошуку
let searchMarkPagination = 'trending';
// Змінна для ситуації, коли після пошуку воддиться недійсне значення і натискаються кнопки пагінації
let lastInput = '';

refs.formEl.addEventListener('submit', onSearch);
refs.paginationBox.addEventListener('click', onClick);

saveGenresToLocalStorage();

movieApiService.getTrendingMovies().then(data => {
  movieApiService.resetCurrentPage();
  saveMoviesToLocalStorage(data);
  createMainMarkup(data.results);

  // При запуску сторіник малюємо пагінацію з макс. к-стю сторінок data.total_pages
  paginationMarkUp(1, data.total_pages);
});

function onSearch(evt) {
  evt.preventDefault();
  // Якщо нічого не введено, виводимо помилку, глушимо кнопку і зупиняємо функцію
  if (evt.currentTarget.elements.searchQuery.value.trim() === '') {
    refs.formMessage.insertAdjacentHTML(
      'beforeend',
      'Sorry, you need to enter something'
    );
    refs.searchBtn.disabled = true;
    setTimeout(() => {
      refs.formMessage.innerHTML = '';
      refs.searchBtn.disabled = false;
    }, 2000);
    return;
  }

  // Оновлюємо значення поточної сторінки через сетер класу MovieApiService
  movieApiService.resetCurrentPage();

  movieApiService.value = evt.currentTarget.elements.searchQuery.value;

  movieApiService.searchMovies().then(data => {
    // Перевіряємо чи запит вернувся пустим
    if (data.results.length === 0) {
      refs.formMessage.insertAdjacentHTML(
        'beforeend',
        'Search result not successfull.Enter the correct movie name'
      );
      refs.searchBtn.disabled = true;
      // Очищуємо поле інпуту
      evt.target.elements.searchQuery.value = '';
      // Сет таймаут для повідомлення
      setTimeout(() => {
        refs.formMessage.innerHTML = '';
        refs.searchBtn.disabled = false;
      }, 2000);
      // Через те, що запит прийшов ПОРОЖНІМ movieApiService.value перезаписуємо
      // значенням lastInput, щоб якщо після помилки натиснути на кнопки пагінації,
      // запит ішов по останньому вдалому значенню інпута, тобто lastInput
      movieApiService.value = lastInput;
      // Зупиняємо функцію
      return;
    }
    // ЗАПИТ ПРИЙШОВ НЕ ПОРОЖНІМ
    // Змінюємо маяк на "пошук", щоб в мабутньому при натисканні на пагінацію, запит йшов по пошуку
    searchMarkPagination = 'search';
    // Очищаємо розмітку
    clearMarkup();
    saveMoviesToLocalStorage(data);
    createMainMarkup(data.results);
    // При пошуку фільмів малюємо пагінацію
    paginationMarkUp(1, data.total_pages);
    // Через те, що запит прийшов З ДАНИМИ, можемо перезаписувати lastInput вдалим значенням інпута
    lastInput = evt.target.elements.searchQuery.value;
    evt.target.elements.searchQuery.value = '';
  });
}

function createMainMarkup(dataArray) {
  const oneMarkup = obj => {
    // Функція для вибору жанрів з локал сторадж + умову на кількість жанрів
    checkGenresById(obj);
    // Записуємо дані рейтингу
    const ratingValue = obj.vote_average.toFixed(1);
    // Записуємо дату випуску
    const year = obj.release_date || obj.first_air_date || '';
    // Постер
    const START_URL = 'https://image.tmdb.org/t/p/w500';
    let posterSrc = '';
    if (obj.poster_path) {
      posterSrc = `${START_URL}${obj.poster_path}`;
    } else {
      posterSrc = no_image;
    }

    return `<li class="card-wraper" id="${obj.id}">
                <a class="card-wraper_link" href="#">
                  <img class="card-img" src="${posterSrc}" alt="${
      obj.title || obj.name
    }" />
                </a>
                <div class="card-title">${obj.title || obj.name}</div>
                <div class="wraper">
                  <div class="card-genre-wraper">
                      <div class="card-genre">${checkGenresById(obj)}</div>
                  </div>
                  <div class="card-year">${year.slice(0, 4)}</div>
                  <div class="card-rating-wraper">
                      <div class="card-rating">${ratingValue}</div>
                  </div>
                </div>
            </li>`;
  };
  const markup = dataArray.map(oneMarkup).join('');
  refs.divEl.insertAdjacentHTML('beforeend', markup);
}

// Функція натискання на кнопки пагінації
function onClick(evt) {
  if (evt.target.textContent == '...') {
    return;
  }
  if (evt.target.nodeName !== 'P') {
    return;
  }
  clearMarkup();
  // console.log(evt.target.textContent);
  let currentPage = evt.target.textContent;

  if (evt.target.textContent == '>>') {
    currentPage = Number(refs.targetPage.textContent);
    currentPage += 1;
  }

  if (evt.target.textContent == '<<') {
    currentPage = Number(refs.targetPage.textContent);
    currentPage -= 1;
  }

  movieApiService.newCurrentPage = currentPage;

  // перевіряємо, що ми шукаємо при натисканні на кнопки пагінації по МАЯКУ.
  checkTargetByBtnPaginationClick(currentPage);
}

// Функція перевірки, що ми шукаємо при натисканні на кнопки пагінації по МАЯКУ.
function checkTargetByBtnPaginationClick(currentPage) {
  if (searchMarkPagination === 'trending') {
    movieApiService.getTrendingMovies().then(data => {
      saveMoviesToLocalStorage(data);
      createMainMarkup(data.results);
      paginationMarkUp(currentPage, data.total_pages);
    });
  }
  if (searchMarkPagination === 'search') {
    movieApiService.searchMovies().then(data => {
      saveMoviesToLocalStorage(data);
      createMainMarkup(data.results);
      paginationMarkUp(currentPage, data.total_pages);
    });
  }
}

// Функція збереження отриманих даних ЖАНРІВ фільмів в локалсторадж
function saveGenresToLocalStorage() {
  movieApiService.getGenres().then(data => {
    // console.log(data.genres)
    localStorage.setItem('GENRES_DATA_KEY', JSON.stringify(data.genres));
  });
}

// Функція збереження отриманих даних фільмів в ТРЕНДІ в локалсторадж
function saveMoviesToLocalStorage(data) {
  localStorage.setItem('TRENDING_DATA_KEY', JSON.stringify(data.results));
}

// Функція очистки маркапу
export function clearMarkup() {
  refs.divEl.innerHTML = '';
}
