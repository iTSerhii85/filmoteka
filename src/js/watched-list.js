export { watched };

let watched = new Array();

function saveWatchedListToLocalStorage(data) {
  localStorage.setItem('WATCHED_LIST_DATA_KEY', JSON.stringify(data.results));
}
