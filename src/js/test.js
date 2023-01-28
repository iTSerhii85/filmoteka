const list = document.querySelector('.js-main-gallery');
list.addEventListener('click', onClick);

function onClick(evt) {
    if (evt.target.nodeName !== "IMG") {
        return;
    }

 const id = evt.target.closest('li').id;
 console.log(typeof id);

 const film = JSON.parse(localStorage.getItem("TRENDING_DATA_KEY"));
 console.log(film);

 const findFilm = film.find(obj => obj.id === Number(id));
 console.log(findFilm);

 createMarkup(findFilm);
}

function createMarkup(obj) {
    const markup = `
    <li class="card-wraper">
      <img id="${obj.id}" class="card-img" src="https://image.tmdb.org/t/p/w500${obj.poster_path}" alt="#" />
      <div class="card-title">${obj.title || obj.name}</div>
      <div class="wraper">
        <div class="card-genre-wraper">
          <div class="card-genre"></div>
        </div>
        <div class="card-year"></div>
        <div class="card-rating-wraper"><div class="card-rating"></div></div>
      </div>
    </li>`

    list.innerHTML = markup;
}



