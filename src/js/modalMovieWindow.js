let currentId = null;
const cardList = document.querySelector('.js-main-gallery');
const backdrop = document.querySelector('.backdrop-modal');
const closeModalBtn = document.querySelector('.button-close');
const movieCard = document.querySelector('.modal-movie-card');

const START_URL = 'https://image.tmdb.org/t/p/w500'

cardList.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
      console.log(event);
      renderModal(event);
    }
});

// cardList.addEventListener('click', openModal);

function openModal(event) {
   renderModal(event);
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
   renderModal(event);
    if (event.target.nodeName === 'BUTTON') {
        return
    }
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


function renderMovieCard(data) {
   renderModal(data);

  // checkGenresById(data)
     
  // const movie = data.map(obj => `<div class='modal-movie-card__wrappe-img'><img class='modal-movie-card__image' src='${START_URL}${{poster_path}}' alt='${{title}}'
  //                   loading='lazy' />
  //           </div>
  //           <div class='modal-movie-data'>
  //               <h2 class='modal-movie-data__title'>${{title}}</h2>

  //               <table class='modal-movie-data-table'>
  //                   <tr class='modal-movie-data-table__row'>
  //                       <td>
  //                           <p class='modal-movie-data__attribute'>Vote / Votes</p>
  //                       </td>
  //                       <td>
  //                           <p><span class='modal-movie-data__vote'>${{vote}}</span> / ${{votes}}</p>
  //                       </td>

  //                   </tr>
  //                   <tr class='modal-movie-data-table__row'>
  //                       <td>
  //                           <p>Popularity</p>
  //                       </td>
  //                       <td>
  //                           <p>${{popularity}}</p>
  //                       </td>

  //                   </tr>
  //                   <tr class='modal-movie-data-table__row'>
  //                       <td>
  //                           <p>Original Title</p>
  //                       </td>
  //                       <td>
  //                           <p>${{original_title}}</p>
  //                       </td>

  //                   </tr>
  //                   <tr class='modal-movie-data-table__row'>
  //                       <td>
  //                           <p>Genre</p>
  //                       </td>
  //                       <td>
  //                           // <p>{checkGenresById(data)}</p>
  //                       </td>

  //                   </tr>
  //               </table>
  //               <h3 class='modal-movie-data__about_title'>About</h3>
  //               <p class='modal-movie-data__about'>
  //                   ${{overview}}
  //               </p>


  //               <div class='modal-movie-btn-wrapper' style='clear: both'>
  //                   <button class='button-modal btn-to-watched' type='button' data-action='${{id}}'>
  //                       ADD TO WATCHED
  //                   </button>
  //                   <button class='button-modal btn-to-queue' type='button' data-action='${{id}}'>
  //                       ADD TO QUEUE
  //                   </button>
  //                   <button class='button-modal btn-to-watched' type='button' data-action='${{id}}'>
  //                       REMOVE FROM WATCHED
  //                   </button>
  //                   <button class='button-modal btn-to-queue' type='button' data-action='${{id}}'>
  //                       REMOVE FROM QUEUE
  //                   </button>
  //               </div>
  //           </div>`).join('');

  // movieCard.innerHTML(movie);

    const backdropImage = data.backdrop_path;
    if (backdropImage !== null) {
    const background = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
    backdrop.style.backgroundImage = `url('${background}')`;
    backdrop.style.backgroundSize = 'cover';
    backdrop.style.backgroundPosition = '50% 50%';
  }
}

// const movieInfo 

// function checkGenresById(obj) {
//   const savedGenresData = localStorage.getItem('GENRES_DATA_KEY')
//   const parseGenresData = JSON.parse(savedGenresData)
//   let genresArr = [];

//     const genresIds = obj.genre_ids

//     for (const parseGenre of parseGenresData) {
      
//       if (genresIds.includes(parseGenre.id)) {
//         genresArr.push(parseGenre.name)
//       }
      
//     }
//     // console.log(genresArr)  
  
//   const genresStr = genresArr.join(', ');
//   return genresStr;
// }
