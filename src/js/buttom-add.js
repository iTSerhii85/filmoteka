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

// const catchModal = document.querySelector('.card-wraper');
// catchModal.addEventListener('show', catchModalData);

let watchedEl = watched.getElementById();
let queueEl = queue.getElementById();

// function catchModalData() {
// let movieId = Object.getElementById();
    
//     if (movieId === null) {
//         toWatchedBtn.disabled = true;
//         toQueueBtn.disabled = true;
//         removeWatchedBtn.disabled = true;
//         removeQueueBtn.disabled = true;
//         return;
//     }
//     if (movieId !== watchedEl) {
//       toWatchedBtn.disabled = false;
//     }

//     if (movieId === watchedEl) {
//         removeWatchedBtn.disabled = false;
//     }

//      if (movieId !== queueEl) {
//        toQueueBtn.disabled = false;
//      }

//      if (movieId === queueEl) {
//          removeQueueBtn.disabled = false;
//      }
// }

function onToWatchedBtn() {
    let alreadyExists = watched.find((watched) => watched.id === watchedEl.id);
    
    if (typeof alreadyExists === "undefined") {
      watched.push(watchedEl);
      // watched.unshift(watchedEl);
      console.log(`${watchedEl} added to watched`);

      toWatchedBtn.disabled = true;
      removeWatchedBtn.disabled = false;
      // toWatchedBtn.hide;
      // removeWatchedBtn.show;
       return;
    }
  return;
}

function onRemoveWatchedBtn() {
  try {
    alreadyExists === "fined";
    watched.remove(watchedEl);
    removeWatchedBtn.hide;
    toWatchedBtn.show;

    return;
  }
  
    catch (error) {
    console.log(error);
    alert ("Sorry, try again later");
    }
}

function onToQueueBtn() {
    let alreadyQueue = queue.find(queue => queue.id === queueEl.id);

    if (typeof alreadyQueue === 'undefined') {
      queue.push(queueEl);
      console.log(`${queueEl} added to queue`);
      btmToQueue.hide;
      removeQueueBtn.show;
      return;
    
  } 
  return;
}

function onRemoveQueueBtn() {
try {
  alreadyQueue === "fined";
  queue.remove(queueEl);
  
  removeQueueBtn.hide;
  btmToQueue.show;

    return;
  }
  
    catch (error) {
    console.log(error);
    alert ("Sorry, try again later");
    }
}