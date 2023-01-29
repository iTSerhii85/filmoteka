export { queue };

let queue = new Array();

function saveQueueListToLocalStorage(data) {
  localStorage.setItem('Queue_LIST_DATA_KEY', JSON.stringify(data.results));
}
