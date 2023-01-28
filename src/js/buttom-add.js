import { watched } from './watched-list';
import { queue } from './queue-list';

const toWatchedBtn = document.querySelector('.btn-to-watched');
const toQueueBtn = document.querySelector('.btn-to-queue');
const removeWatchedBtn = document.querySelector('.btn-from-watched');
const removeQueueBtn = document.querySelector('.btn-from-queue');

btmToWatched.addEventListener('click', onToWatchedBtn);
btmToQueue.addEventListener('click', onToQueueBtn);
removeWatchedBtn.addEventListener('click', onRemoveWatchedBtn);
removeQueueBtn.addEventListener('click', onRemoveQueueBtn);

const catchModal = document.querySelector('.modal-movie-card');
catchModal.addEventListener('show', catchModalData);

let watchedElId = watched.getElementById();
let queueElId = queue.getElementById();

function catchModalData() {
let movieId = Object.getElementById();
    
    if (movieId === null) {
        toWatchedBtn.disabled = true;
        toQueueBtn.disabled = true;
        removeWatchedBtn.disabled = true;
        removeQueueBtn.disabled = true;
        return;
    }
    if (movieId !== watchedElId) {
      toWatchedBtn.disabled = false;
    }

    if (movieId === watchedElId) {
        removeWatchedBtn.disabled = false;
    }

     if (movieId !== queueElId) {
       toQueueBtn.disabled = false;
     }

     if (movieId === queueElId) {
         removeQueueBtn.disabled = false;
     }
}
