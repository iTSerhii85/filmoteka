const modal = document.querySelector('.js-footer-modal');
const openModal = document.querySelector('.footer-open-modal_link');

openModal.addEventListener('click', openModalWindow);

const markup = `
<div class="footer-modal-backdrop">
  <div class="footer-modal">
    <button type="button" class="footer-modal-close-button">
    </button>
  </div>
</div>`;

function openModalWindow(){
    modal.innerHTML = markup;
    const closeModalBtn = document.querySelector('.footer-modal-close-button');
    closeModalBtn.addEventListener('click', closeModalWindow);
}

function closeModalWindow(){
    modal.innerHTML = ``;
}