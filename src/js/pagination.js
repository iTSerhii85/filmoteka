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
