const watchedLibBtn = document.querySelector('.js-watched-lib-btn');
const queueLibBtn = document.querySelector('.js-queue-lib-btn');
const libraryBox = document.querySelector('.js-library-gallery');
const emptyGalleryBox = document.querySelector('.info-notify-box');
const emptyGalleryText = document.querySelector('.info-notify-text');


function localStorageObject(key) {
  const getObjectFromLs = localStorage.getItem(key);
  const parseObjectFromLs = JSON.parse(getObjectFromLs);
  console.log(parseObjectFromLs);
  return parseObjectFromLs;
}
const watchedArray = localStorageObject('TRENDING_DATA_KEY');
const queueArray = localStorageObject('SEARCH_RESULT_DATA_KEY');


function renderLibrary(arrayMovies) {

  if (arrayMovies.length === 0) {
    clearMarkup();

    return libraryBox.insertAdjacentHTML(
      'beforeend',
      `<div class="info-notify-box">
    <p class="info-notify-text">There is nothing in this section!</p></div>`
    );
  }

  const markupOneCard = obj => {
    clearMarkup();
    checkGenresById(obj);

    return ` <li class="card-wraper" id="${obj.id}">
       <img class="card-img" src="https://image.tmdb.org/t/p/w500${
         obj.poster_path
       }" alt="#" />
       <div class="card-title">${obj.title || obj.name}</div>
      <div class="wraper">
         <div class="card-genre-wraper">
           <div class="card-genre">${checkGenresById(obj)}</div>
         </div>
         <div class="card-year">${
           obj.release_date.slice(0, 4) || obj.first_air_date.slice(0, 4) || ''
         }</div>
         <div class="card-rating-wraper"><div class="card-rating">${obj.vote_average.toFixed(
           1
         )}</div></div>
       </div>
     </li>`;
  };

  const libraryMarkup = arrayMovies.map(markupOneCard).join('');
  libraryBox.insertAdjacentHTML('beforeend', libraryMarkup);
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

watchedLibBtn.addEventListener('click', onClickWatched);
queueLibBtn.addEventListener('click', onClickQueue);

function onClickWatched() {
    renderLibrary(watchedArray);
}

function onClickQueue() {
    renderLibrary(queueArray);
}

function clearMarkup() {
  libraryBox.innerHTML = '';
}