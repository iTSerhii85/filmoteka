import Notiflix from 'notiflix';

const refs = {
  backdropTrailer: document.querySelector('.backdrop-modal-trailer'),
  trailer: document.querySelector('.trailer-player'),
  btnOpen: document.querySelector('.modal-movie'),
  btnClose: document.querySelector('.btnClose'),
};
refs.btnOpen.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  if (e.target.classList.value != 'trailer-btn') {
    return;
  } else {
    const idMovie = e.target.getAttribute('id');

    refs.btnClose.addEventListener('click', closeModalTrailer);
    refs.backdropTrailer.addEventListener('click', closeBackdrop);
    document.addEventListener('keyup', closeEsc);
    return fetch(
      `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=7c6a11c2d8e8524ccfd41d8aedf2bd73&language=en-US`
    )
      .then(r => r.json())
      .then(data => {
        return data.results;
      })
      .then(trailer => {
        if (trailer.length !== 0) {
          refs.backdropTrailer.classList.remove('is-hidden');
          return showTrailer(trailer[0].key);
        } else {
          Notiflix.Notify.info("Oops, there's no trailer yet");
        }
      });
  }
}

function closeModalTrailer(e) {
  refs.btnClose.removeEventListener('click', closeModalTrailer);
  refs.backdropTrailer.removeEventListener('click', closeBackdrop);
  document.removeEventListener('keydown', closeEsc);
  refs.trailer.setAttribute('src', `https://www.youtube.com/embed`);
  refs.backdropTrailer.classList.add('is-hidden');
}

function closeBackdrop(e) {
  if (e.target.classList.value !== 'backdrop-modal-trailer') {
    return;
  }

  closeModalTrailer(e);
}

function closeEsc(e) {
  if (e.key !== 'Escape') {
    return;
  }
  e.stopPropagation();
  closeModalTrailer(e);
}

function showTrailer(trailerVideo) {
  refs.trailer.setAttribute(
    'src',
    `https://www.youtube.com/embed/${trailerVideo}`
  );
}
