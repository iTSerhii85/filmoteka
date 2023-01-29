import ico from '../images/svg/sprite.svg'

import { developers } from "./developers";

const modal = document.querySelector('.js-footer-modal');
const openModal = document.querySelector('.footer-open-modal_link');

openModal.addEventListener('click', openModalWindow);

const developerMarkup = developers.map(obj =>`
<div class="developer">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="${obj.img}" alt="Developer ${obj.name}" class="dev_photo" loading="lazy">
    </div>
    <div class="flip-card-back">
      <a href="${obj.github}" class="icon-github" target="_blank">
        <svg width="50" height="50">
          <use href="${ico}#icon-github"></use>
        </svg>
      </a>
      <a href="${obj.linkedin}" class="icon-linkedin" target="_blank">
        <svg width="50" height="50">
          <use href="${ico}#icon-linkedin"></use>
        </svg>
      </a>
    </div>
</div>
</div>
  <div class="border">
    <div class="about">
     <h4 class="dev-name">${obj.name}</h4>
      <p class="about-dev">${obj.text}</p>
    </div>
  </div>
</div>`).join('');

const markup = `
<div class="footer-modal-backdrop">
  <div class="footer-modal">
    <button type="button" class="footer-modal-close-button">
    X
    </button>
    <h2 class="our-team">Our team</h2>
   ${developerMarkup}
  </div>
</div>`;

function openModalWindow(){
    modal.innerHTML = markup;
    const closeModalBtn = document.querySelector('.footer-modal-close-button');
    closeModalBtn.addEventListener('click', closeModalWindow);
    const backdrop = document.querySelector('.footer-modal-backdrop');
    backdrop.addEventListener('click', closeModalBackdrop);
    document.addEventListener('keydown', closeModalWindow);
    document.body.style.overflow = "hidden";
}

function closeModalBackdrop(event) {
  if (event.target.classList.value !== 'footer-modal-backdrop') {
    return;
  }
  closeModalWindow();
}

function closeModalWindow(){
    modal.innerHTML = ``;
    document.removeEventListener('keydown', closeModalWindow);
    document.body.style.overflow = ""; 
}

