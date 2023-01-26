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

let currentPage = 3;
// firstPage.style.color = 'red';
let maxPage = 100;
// &lt;

// &gt;

function paginationMarkUp(currentPage, maxPage) {
  targetPage.textContent = currentPage;

  if (currentPage > '1') {
    preCurPage.textContent = currentPage - 1;
  }

  if (currentPage > '2') {
    preCurPage.textContent = currentPage - 1;
    afterPage.textContent = currentPage + 1;
  }

  if (currentPage > '3') {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
    afterPage.textContent = currentPage + 1;
  }
  if (currentPage > '4') {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
    afterPage.textContent = currentPage + 1;
    nextAfterPage.textContent = currentPage + 2;
  }
  if (currentPage > '5') {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
    afterPage.textContent = currentPage + 1;
    nextAfterPage.textContent = currentPage + 2;
    preDots.textContent = '...';
    perwPage.textContent = '<<';
    firstPage.textContent = '1';
  }

  if (currentPage > '6') {
    preCurPage.textContent = currentPage - 1;
    prePreCurPage.textContent = currentPage - 2;
    afterPage.textContent = currentPage + 1;
    nextAfterPage.textContent = currentPage + 2;
    preDots.textContent = '...';
    perwPage.textContent = '<<';
    firstPage.textContent = '1';
    afterDots.textContent = '...';
    nextPage.textContent = '>>';
    firstPage.textContent = maxPage;
  }
}

paginationMarkUp(currentPage);
