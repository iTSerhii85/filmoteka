let watched = new Array();

function saveWatchedListToLocalStorage(data) {
  localStorage.setItem('WATCHED_LIST_DATA_KEY', JSON.stringify(data.results));
}

let queue = new Array();

function saveQueueListToLocalStorage(data) {
  localStorage.setItem('Queue_LIST_DATA_KEY', JSON.stringify(data.results));
}

const toWatchedBtn = document.querySelector('.js-btn-to-watched');
const removeWatchedBtn = document.querySelector('.js-btn-from-watched');

const toQueueBtn = document.querySelector('.js-btn-to-queue');
const removeQueueBtn = document.querySelector('.js-btn-from-queue');

toWatchedBtn.addEventListener('click', onToWatchedBtn);
removeWatchedBtn.addEventListener('click', onRemoveWatchedBtn);

toQueueBtn.addEventListener('click', onToQueueBtn);
removeQueueBtn.addEventListener('click', onRemoveQueueBtn);

function onToWatchedBtn(event) {
  const button = event.currentTarget;

  console.log(button);
  const idMovie = button.id;
  console.log(idMovie);
  console.log('onToWatchedBt entered');
  let alreadyExists = watched.find(watched => watched.id === idMovie);

  if (typeof alreadyExists === 'undefined') {
    watched.push(idMovie);
    console.log(`${idMovie} added to watched`);

    ('toWatchedBtn');
    ('removeWatchedBtn');

    return;
  }
  return;
}

function onRemoveWatchedBtn(event) {
  const button = event.currentTarget;

  const idMovie = button.id;
  console.log(idMovie);
  console.log('onRemoveWatchedBtn entered');
  let alreadyExists = watched.find(watched => watched.id === idMovie);

  if (typeof alreadyExists === 'fined') {
    watched.remove(idMovie);
    console.log(`${idMovie} remove from watched`);

    ('toWatchedBtn');
    ('removeWatchedBtn');

    return;
  }
  return;
}

function onToQueueBtn(event) {
  const button = event.currentTarget;

  const idMovie = button.id;
  console.log(idMovie);
  console.log('onToQueueBtn entered');

  let alreadyQueue = queue.find(queue => queue.id === idMovie);

  if (typeof alreadyQueue === 'undefined') {
    queue.push(idMovie);
    console.log(`${idMovie} added to queue`);

    ('toQueueBtn');
    ('removeQueueBtn');

    return;
  }
  return;
}

function onRemoveQueueBtn(event) {
  const button = event.currentTarget;

  const idMovie = button.id;
  console.log(idMovie);
  console.log('onRemoveQueueBtn entered');
  let alreadyQueue = queue.find(queue => queue.id === idMovie);

  if (typeof alreadyQueue === 'fined') {
    queue.remove(idMovie);
    console.log(`${idMovie} remove from queue`);

    ('toQueueBtn');
    ('removeQueueBtn');

    return;
  }
  return;
}
