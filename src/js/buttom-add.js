// let watched = new Array();

// function saveWatchedListToLocalStorage(data) {
//   localStorage.setItem('WATCHED_LIST_DATA_KEY', JSON.stringify(data));
// }

// let queue = new Array();

// function saveQueueListToLocalStorage(data) {
//   localStorage.setItem('QUEUE_LIST_DATA_KEY', JSON.stringify(data));
// }

// let watchedListFromLocalStorage = localStorage.getItem('WATCHED_LIST_DATA_KEY');
// if (watchedListFromLocalStorage != null) {
//   watched = JSON.parse(watchedListFromLocalStorage);
// }

// let queueListFromLocalStorage = localStorage.getItem('QUEUE_LIST_DATA_KEY');
// if (queueListFromLocalStorage != null) {
//   queue = JSON.parse(queueListFromLocalStorage);
// }

// const toWatchedBtn = document.querySelector('.js-btn-to-watched');
// const removeWatchedBtn = document.querySelector('.js-btn-from-watched');

// const toQueueBtn = document.querySelector('.js-btn-to-queue');
// const removeQueueBtn = document.querySelector('.js-btn-from-queue');

// toWatchedBtn.addEventListener('click', onToWatchedBtn);
// removeWatchedBtn.addEventListener('click', onRemoveWatchedBtn);

// toQueueBtn.addEventListener('click', onToQueueBtn);
// removeQueueBtn.addEventListener('click', onRemoveQueueBtn);

// function onToWatchedBtn(event) {
//   const button = event.currentTarget;

//   console.log(button);
//   const idMovie = button.id;
//   console.log(idMovie);
//   console.log('onToWatchedBt entered');
//   let alreadyExists = watched.find(element => element === idMovie);

//   if (typeof alreadyExists === 'undefined') {
//     watched.push(idMovie);
//     saveWatchedListToLocalStorage(watched);
//     console.log(`${idMovie} added to watched`);

//     // 'toWatchedBtn';
//     // 'removeWatchedBtn';

//     return;
//   }
//   return;
// }

// function onRemoveWatchedBtn(event) {
//   const button = event.currentTarget;

//   const idMovie = button.id;
//   console.log(idMovie);
//   console.log('onRemoveWatchedBtn entered');
//   let alreadyExists = watched.find(element => element === idMovie);

//   if (typeof alreadyExists === 'fined') {
//     watched.remove(idMovie);
//     console.log(`${idMovie} remove from watched`);

//     ('toWatchedBtn');
//     ('removeWatchedBtn');

//     return;
//   }
//   return;
// }

// function onToQueueBtn(event) {
//   const button = event.currentTarget;

//   console.log(button);
//   const idMovie = button.id;
//   console.log(idMovie);
//   console.log('onToQueueBtn entered');
//   let alreadyQueue = queue.find(element => element === idMovie);

//   if (typeof alreadyQueue === 'undefined') {
//     queue.push(idMovie);
//     saveQueueListToLocalStorage(queue);
//     console.log(`${idMovie} added to queue`);

//     // ('toQueueBtn');
//     // ('removeQueueBtn');

//     return;
//   }
//   return;
// }

// function onRemoveQueueBtn(event) {
//   const button = event.currentTarget;

//   const idMovie = button.id;
//   console.log(idMovie);
//   console.log('onRemoveQueueBtn entered');
//   let alreadyQueue = queue.find(element => element === idMovie);

//   if (typeof alreadyQueue === 'fined') {
//     queue.remove(idMovie);
//     console.log(`${idMovie} remove from queue`);

//     ('toQueueBtn');
//     ('removeQueueBtn');

//     return;
//   }
//   return;
// }
