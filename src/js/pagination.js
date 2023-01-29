const paginationBox = document.querySelector('.pagination');
const firstPage = document.querySelector('.firstPage');
const perwPage = document.querySelector('.perwPage');
const preDots = document.querySelector('.preDots');
const prePreCurPage = document.querySelector('.prePreCurPage');
const preCurPage = document.querySelector('.preCurPage');
const targetPage = document.querySelector('.targetPage');
const afterPage = document.querySelector('.afterPage');
const nextAfterPage = document.querySelector('.nextAfterPage');
const afterDots = document.querySelector('.afterDots');
const nextPage = document.querySelector('.nextPage');
const lastPage = document.querySelector('.lastPage');

// let maxLibraryPage = 0;
// let maxPage = 1;
// let currentPage = 1;

let TESTARRAY = [
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
  { 1: 1 },
];

export function paginationMarkUp(currentPage, maxPage) {
  firstPage.textContent = '';
  perwPage.textContent = '';
  preDots.textContent = '';
  prePreCurPage.textContent = '';
  preCurPage.textContent = '';
  targetPage.textContent = currentPage;
  afterPage.textContent = '';
  nextAfterPage.textContent = '';
  afterDots.textContent = '';
  nextPage.textContent = '';
  lastPage.textContent = '';

  // if (maxPage == '0') {
  //   paginationWatched();
  //   targetPage.textContent = '1';
  // }

  if (currentPage == '1' && maxPage > '1') {
    afterPage.textContent = Number(currentPage) + 1;
  }

  if (currentPage == '1' && maxPage > '2') {
    afterPage.textContent = Number(currentPage) + 1;
    nextAfterPage.textContent = Number(currentPage) + 2;
  }

  if (currentPage == '1' && maxPage > '3') {
    afterPage.textContent = Number(currentPage) + 1;
    nextAfterPage.textContent = Number(currentPage) + 2;
    afterDots.textContent = '...';
    nextPage.textContent = '>>';
    lastPage.textContent = maxPage;
  }

  if (currentPage > '1' && maxPage > '2') {
    preCurPage.textContent = currentPage - 1;
    afterPage.textContent = Number(currentPage) + 1;
  }

  if (currentPage > '1' && maxPage > '3') {
    preCurPage.textContent = currentPage - 1;
    afterPage.textContent = Number(currentPage) + 1;
    nextAfterPage.textContent = Number(currentPage) + 2;
  }

  if (currentPage > '1' && maxPage > '4') {
    preCurPage.textContent = currentPage - 1;
    afterPage.textContent = Number(currentPage) + 1;
    nextAfterPage.textContent = Number(currentPage) + 2;
    afterDots.textContent = '...';
    nextPage.textContent = '>>';
    lastPage.textContent = maxPage;
  }

  if (currentPage > '1') {
    preCurPage.textContent = currentPage - 1;
  }

  if (currentPage > '2' && maxPage > '4') {
    afterPage.textContent = Number(currentPage) + 1;
    nextAfterPage.textContent = Number(currentPage) + 2;
    afterDots.textContent = '...';
    nextPage.textContent = '>>';
    lastPage.textContent = maxPage;
  }

  if (currentPage > '2' && maxPage == '5') {
    afterPage.textContent = Number(currentPage) + 1;
    nextAfterPage.textContent = Number(currentPage) + 2;
    afterDots.textContent = '';
    nextPage.textContent = '';
    lastPage.textContent = '';
  }

  if (currentPage > '2') {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
  }

  if (currentPage > '3') {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
    afterPage.textContent = Number(currentPage) + 1;
    nextAfterPage.textContent = Number(currentPage) + 2;
    preDots.textContent = '...';
    perwPage.textContent = '<<';
    firstPage.textContent = '1';
    lastPage.textContent = maxPage;
  }

  if (currentPage > '6') {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
    afterPage.textContent = Number(currentPage) + 1;
    nextAfterPage.textContent = Number(currentPage) + 2;
    preDots.textContent = '...';
    perwPage.textContent = '<<';
    firstPage.textContent = '1';
    afterDots.textContent = '...';
    nextPage.textContent = '>>';
    lastPage.textContent = maxPage;
  }

  if (currentPage == maxPage - 2 && maxPage < '4') {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
    afterDots.textContent = '';
    nextPage.textContent = '';
    lastPage.textContent = '';
    preDots.textContent = '...';
    perwPage.textContent = '<<';
  }

  if (currentPage == maxPage - 2 && maxPage == '3') {
    preCurPage.textContent = '';
    prePreCurPage.textContent = '';
    afterDots.textContent = '';
    nextPage.textContent = '';
    lastPage.textContent = '';
    preDots.textContent = '';
    perwPage.textContent = '';
  }

  if (currentPage == maxPage - 1) {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
    afterDots.textContent = '';
    nextPage.textContent = '';
    nextAfterPage.textContent = '';
    lastPage.textContent = '';
    preDots.textContent = '...';
    perwPage.textContent = '<<';
    firstPage.textContent = '1';
  }

  if (currentPage == maxPage - 1 && maxPage == '3') {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = '';
    afterDots.textContent = '';
    nextPage.textContent = '';
    lastPage.textContent = '';
    preDots.textContent = '';
    perwPage.textContent = '';
    firstPage.textContent = '';
  }

  if (currentPage == maxPage) {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
    afterDots.textContent = '';
    nextPage.textContent = '';
    afterPage.textContent = '';
    nextAfterPage.textContent = '';
    lastPage.textContent = '';
    preDots.textContent = '...';
    perwPage.textContent = '<<';
    firstPage.textContent = '1';
  }

  if (currentPage == maxPage && maxPage == '3') {
    prePreCurPage.textContent = currentPage - 2;
    preCurPage.textContent = currentPage - 1;
    afterDots.textContent = '';
    nextPage.textContent = '';
    lastPage.textContent = '';
    preDots.textContent = '';
    perwPage.textContent = '';
    firstPage.textContent = '';
  }

  if (currentPage == '1' && maxPage == '2') {
    prePreCurPage.textContent = '';
    preCurPage.textContent = '';
    afterDots.textContent = '';
    nextPage.textContent = '';
    lastPage.textContent = '';
    preDots.textContent = '';
    perwPage.textContent = '';
    firstPage.textContent = '';
  }

  if (currentPage == '1' && maxPage == '1') {
    prePreCurPage.textContent = '';
    preCurPage.textContent = '';
    afterDots.textContent = '';
    nextPage.textContent = '';
    lastPage.textContent = '';
    preDots.textContent = '';
    perwPage.textContent = '';
    firstPage.textContent = '';
  }

  if (currentPage == maxPage && maxPage == '2') {
    prePreCurPage.textContent = '';
    preCurPage.textContent = currentPage - 1;
    afterDots.textContent = '';
    nextPage.textContent = '';
    lastPage.textContent = '';
    preDots.textContent = '';
    perwPage.textContent = '';
    firstPage.textContent = '';
  }
}

// paginationMarkUp(currentPage, maxPage);

// paginationWatched(currentPage, maxPage);
// paginationWatched();
// export function paginationWatched() {
//   // ЗАМЕНИТЬ КЛЮЧ!!!

//   let arr = localStorage.getItem('SEARCH_RESULT_DATA_KEY');
//   let parsedArr = JSON.parse(arr);
//   console.log(parsedArr);
//   maxPage = parsedArr.length / 20;
//   console.log(maxPage);
//   currentPage = targetPage.textContent;
//   // paginationMarkUp(currentPage, maxLibraryPage);
//   // paginationMarkUp(currentPage, maxPage);
// }

// export function paginationQueue(currentPage, maxPage) {
//   // ЗАМЕНИТЬ КЛЮЧ!!!

//   let arr = localStorage.getItem('SEARCH_RESULT_DATA_KEY');
//   let parsedArr = JSON.parse(arr);
//   console.log(parsedArr);
//   maxPage = parsedArr.length / 20;
//   console.log(maxLibraryPage);
//   // paginationMarkUp(currentPage, maxPage);
// }

// paginationBox.addEventListener('click', OnPaginationclick);

// function OnPaginationclick(evt) {
//   if (evt.target.textContent == '...') {
//     return;
//   }
//   if (evt.target.nodeName !== 'P') {
//     return;
//   }

//   currentPage = evt.target.textContent;

//   if (evt.target.textContent == '>>') {
//     currentPage = Number(targetPage.textContent) + 1;
//   }

//   if (evt.target.textContent == '<<') {
//     currentPage = Number(targetPage.textContent) - 1;
//   }

// paginationMarkUp(currentPage, maxPage);
// paginationWatched();
//   // paginationQueue();
// }
