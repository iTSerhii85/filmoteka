function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"T57zD":"gallery.a854901a.js","7kCeP":"sprite.ca08d457.svg","8mxQD":"haker.f4ee20cb.jpg","hP01P":"taras_bogun.269d280e.jpg","9zuxn":"yulia.0cfe0448.jpg","gtHAk":"evgeniy.18e4e726.jpg","5znXU":"serhii.9abea59c.jpg","8p6Wm":"shatohin.aaa96f92.jpg","eL9qx":"serhii_p.ce69810a.jpg","4uvNs":"svetlana.47fe9927.jpg","bNA7a":"no-image.0b269193.jpg"}')),document.body.onload=function(){setTimeout((function(){let e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")}),500)};var r;r=new URL(a("kyEFX").resolve("7kCeP"),import.meta.url).toString();var l;l=new URL(a("kyEFX").resolve("8mxQD"),import.meta.url).toString();var d;d=new URL(a("kyEFX").resolve("hP01P"),import.meta.url).toString();var s;s=new URL(a("kyEFX").resolve("9zuxn"),import.meta.url).toString();var c;c=new URL(a("kyEFX").resolve("gtHAk"),import.meta.url).toString();var u;u=new URL(a("kyEFX").resolve("5znXU"),import.meta.url).toString();var m;m=new URL(a("kyEFX").resolve("8p6Wm"),import.meta.url).toString();var v;v=new URL(a("kyEFX").resolve("eL9qx"),import.meta.url).toString();var p;p=new URL(a("kyEFX").resolve("4uvNs"),import.meta.url).toString();const f=[{name:"Serhii Prokip",text:"Team lead. Footer, footer modal, Main and library modal function",img:t(v),linkedin:"https://www.linkedin.com/in/serhii-prokip-422782250",github:"https://github.com/iTSerhii85"},{name:"Yulia Safonova",text:"Scrum master. General styles",img:t(s),linkedin:"",github:"https://github.com/Yulia-Safonova-85"},{name:"Roman Korzun",text:"Developer. Headers, up button, stiles",img:t(l),linkedin:"Button stiles",github:"https://github.com/romancarpangler"},{name:"Andrew Shatohin",text:"Developer. Library",img:t(m),linkedin:"https://www.linkedin.com/in/andrii-shatokhin-016672264/",github:"https://github.com/Andrew-Shatokhin"},{name:"Serhii",text:"Developer. Dark mode.",img:t(u),linkedin:"#",github:"https://github.com/Serj-Melnyk"},{name:"Dmitriy",text:"Developer. Main and library modal stiles.",img:t(l),linkedin:"#",github:"#"},{name:"Taras Bohun",text:"Developer. Headers and up button.",img:t(d),linkedin:"https://www.linkedin.com/in/taras-bohun-94ab28262/",github:"https://github.com/TarasBohun"},{name:"Svitlana",text:"Developer. Main modal button function.",img:t(p),linkedin:"https://www.linkedin.com/in/%D1%81%D0%B2%D1%96%D1%82%D0%BB%D0%B0%D0%BD%D0%B0-%D1%88%D0%B2%D0%B8%D0%B4%D0%B0%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE-0b027385/",github:"https://github.com/Svitlana-Sh"},{name:"Evgeniy",text:"Developer. Pagination function.",img:t(c),linkedin:"https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD%D1%96%D0%B9-%D0%BA%D0%BB%D0%B8%D1%81%D0%B0%D0%BA-72a5978a/",github:"https://github.com/Simon507?tab=repositories"}],g=document.querySelector(".js-footer-modal");document.querySelector(".footer-open-modal_link").addEventListener("click",(function(){g.innerHTML=b;document.querySelector(".footer-modal-close-button").addEventListener("click",_);document.querySelector(".footer-modal-backdrop").addEventListener("click",h),document.addEventListener("keydown",_),document.body.style.overflow="hidden"}));const b=`\n<div class="footer-modal-backdrop">\n  <div class="footer-modal">\n    <button type="button" class="footer-modal-close-button">\n    X\n    </button>\n    <h2 class="our-team">Our team</h2>\n   ${f.map((e=>`\n<div class="developer">\n<div class="flip-card">\n  <div class="flip-card-inner">\n    <div class="flip-card-front">\n      <img src="${e.img}" alt="Developer ${e.name}" class="dev_photo" loading="lazy">\n    </div>\n    <div class="flip-card-back">\n      <a href="${e.github}" class="icon-github" target="_blank">\n        <svg width="50" height="50">\n          <use href="${t(r)}#icon-github"></use>\n        </svg>\n      </a>\n      <a href="${e.linkedin}" class="icon-linkedin" target="_blank">\n        <svg width="50" height="50">\n          <use href="${t(r)}#icon-linkedin"></use>\n        </svg>\n      </a>\n    </div>\n</div>\n</div>\n  <div class="border">\n    <div class="about">\n     <h4 class="dev-name">${e.name}</h4>\n      <p class="about-dev">${e.text}</p>\n    </div>\n  </div>\n</div>`)).join("")}\n  </div>\n</div>`;function h(e){"footer-modal-backdrop"===e.target.classList.value&&_()}function _(){g.innerHTML="",document.removeEventListener("keydown",_),document.body.style.overflow=""}var E;function y(e){const t=localStorage.getItem("GENRES_DATA_KEY"),n=JSON.parse(t);let o=[];const i=e.genre_ids;for(const e of n)i.includes(e.id)&&o.push(e.name);let a="";return 0===o.length?a="Unknown genre":o.length<=2?a=o.join(", "):(o.splice(2,o.length),a=o.join(", ")+", Other"),a}E=new URL(a("kyEFX").resolve("bNA7a"),import.meta.url).toString();const S=document.querySelector(".js-watched-lib-btn"),k=document.querySelector(".js-queue-lib-btn"),D=document.querySelector(".js-library-gallery"),w=document.querySelector(".info-notify-box");document.querySelector(".info-notify-text");function L(e){const t=localStorage.getItem(e);return JSON.parse(t)}const A=L("WATCHED_LIST_DATA_KEY");L("QUEUE_LIST_DATA_KEY");function T(e){if(!e||!e.length)return $(),w.classList.remove("is-hidden");const n=e.map((e=>{$(),y(e);let n="";return n=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:t(E),` <li class="card-wraper" id="${e.id}">\n       <a class="card-wraper_link" href="#"><img class="card-img" src="${n}" alt="${e.title||e.name}"/></a>\n       <div class="card-title">${e.title||e.name}</div>\n      <div class="wraper">\n         <div class="card-genre-wraper">\n           <div class="card-genre">${y(e)}</div>\n         </div>\n         <div class="card-year">\n\n         ${e.release_date.slice(0,4)||e.first_air_date.slice(0,4)||""}\n\n         </div>\n         <div class="card-rating-wraper"><div class="card-rating">${e.vote_average.toFixed(1)}</div></div>\n       </div>\n     </li>`})).join("");D.insertAdjacentHTML("beforeend",n)}function $(){D.innerHTML=""}T(A),S.classList.add("btn-is-active"),S.addEventListener("click",(function(){S.classList.add("btn-is-active"),k.classList.remove("btn-is-active"),w.classList.add("is-hidden");const e=localStorage.getItem("WATCHED_LIST_DATA_KEY");T(JSON.parse(e))})),k.addEventListener("click",(function(){w.classList.add("is-hidden"),k.classList.add("btn-is-active"),S.classList.remove("btn-is-active");const e=localStorage.getItem("QUEUE_LIST_DATA_KEY");T(JSON.parse(e))}));const H=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),q=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),U=matchMedia("(prefers-color-scheme: dark)"),j=document.querySelectorAll(".switcher__radio");function x(e){!function(e){let t,n;"auto"===e?(t="(prefers-color-scheme: light)",n="(prefers-color-scheme: dark)"):(t="light"===e?"all":"not all",n="dark"===e?"all":"not all");[...H].forEach((e=>{e.media=t})),[...q].forEach((e=>{e.media=n}))}(e),"auto"===e?localStorage.removeItem("color-scheme"):function(e){localStorage.setItem("color-scheme",e)}(e)}function B(){return localStorage.getItem("color-scheme")}function F(e){localStorage.setItem("WATCHED_LIST_DATA_KEY",JSON.stringify(e))}function I(e){localStorage.setItem("QUEUE_LIST_DATA_KEY",JSON.stringify(e))}let R,O,N,Y,M;!function(){const e=B();if(null!==e){document.querySelector(`.switcher__radio[value=${e}]`).checked=!0}[...j].forEach((e=>{e.addEventListener("change",(e=>{x(e.target.value)}))}))}(),function(){const e=B(),t=U.matches?"dark":"light";null!==e&&e!==t&&x(e)}(),window.addEventListener("scroll",(()=>{document.documentElement.style.setProperty("--scroll-y",`${window.scrollY}px`)}));const K=document.querySelector(".js-watched-lib-btn"),C=document.querySelector(".js-library-gallery"),X=document.querySelector(".backdrop-modal"),P=document.querySelector(".button-close"),Q=document.querySelector(".modal-movie-card");function W(e){const t=localStorage.getItem(e);return JSON.parse(t)}function J(e){O=document.querySelector(".js-btn-to-watched"),N=document.querySelector(".js-btn-from-watched"),Y=document.querySelector(".js-btn-to-queue"),M=document.querySelector(".js-btn-from-queue"),R=+O.id,O.addEventListener("click",G),N.addEventListener("click",Z),Y.addEventListener("click",ee),M.addEventListener("click",te),function(){const e=W("WATCHED_LIST_DATA_KEY")||[],t=W("QUEUE_LIST_DATA_KEY")||[];let n=e.find((e=>e.id===R));const o=t.find((e=>e.id===R));0!==e.length&&n||z(N);0!==t.length&&o||z(M);n&&z(O);o&&z(Y)}(),P.addEventListener("click",ne),X.addEventListener("click",(e=>function(e){if("backdrop-modal"!==e.target.classList.value)return;ne()}(e))),document.addEventListener("keydown",(e=>oe(e))),X.classList.remove("is-hidden"),setTimeout((()=>{X.firstElementChild.classList.remove("is-hidden")}),350),document.body.classList.add("modal-open")}function z(e){e.style.display="none"}function V(e){e.style.display=""}function G(e){const t=ae(R),n=W("WATCHED_LIST_DATA_KEY")||[];n.find((e=>e.id===R))||(n.push(t),F(n),z(O),V(N))}function Z(){const e=W("WATCHED_LIST_DATA_KEY")||[];if(e.find((e=>e.id===R))){F(e.filter((e=>e.id!==R))),z(N),V(O)}}function ee(){const e=ae(R),t=W("QUEUE_LIST_DATA_KEY")||[];t.find((e=>e.id===R))||(t.push(e),I(t),z(Y),V(M))}function te(){const e=W("QUEUE_LIST_DATA_KEY")||[];if(e.find((e=>e.id===R))){I(e.filter((e=>e.id!==R))),z(M),V(Y)}}function ne(e){X.classList.add("is-hidden"),X.firstElementChild.classList.remove("is-hidden"),P.removeEventListener("click",ne),X.removeEventListener("click",ne),document.removeEventListener("keydown",(e=>oe(e))),document.body.classList.remove("modal-open"),X.style.background="";const t=document.body,n=t.style.top;t.style.position="",t.style.top="",window.scrollTo(0,-1*parseInt(n||"0"))}function oe(e){"Escape"===e.key&&ne()}C.addEventListener("click",(e=>{"IMG"===e.target.nodeName&&ie(e)}));const ie=e=>{const n=document.documentElement.style.getPropertyValue("--scroll-y"),o=document.body;o.style.position="fixed",o.style.top=`-${n}`;const i=ae(e.target.closest("li").id);i&&(R=i.id,function(e){if(null!==e.backdrop_path){const t=`https://image.tmdb.org/t/p/original/${e.backdrop_path}`;X.style.backgroundImage=`url('${t}')`,X.style.backgroundSize="cover",X.style.backgroundPosition="50% 50%"}!function(e){const n="https://image.tmdb.org/t/p/w500";let o="";o=e.poster_path?`${n}${e.poster_path}`:t(E);const i=`\n      <div class='modal-movie-card__wrappe-img'>\n                <img id="${e.id}" class="modal-movie-card__image" src="${o}" alt="${e.title||e.name}" />\n            </div>\n            <div class='modal-movie-data'>\n                <h2 class='modal-movie-data__title'>${e.title||e.name}</h2>\n            <table class='modal-movie-data-table'>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p class='modal-movie-data__attribute'>Vote / Votes</p>\n                    </td>\n                    <td>\n                        <p><span class='modal-movie-data__vote'>${e.vote_average.toFixed(1)}</span> / ${e.vote_count}</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Popularity</p>\n                    </td>\n                    <td>\n                        <p>${e.popularity.toFixed(1)}</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Original Title</p>\n                    </td>\n                    <td>\n                        <p>${e.original_title}</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Genre</p>\n                    </td>\n                    <td>\n                        <p>${y(e)}</p>\n                    </td>\n                </tr>\n            </table>\n            <h3 class='modal-movie-data__about_title'>About</h3>\n            <p class='modal-movie-data__about'>${e.overview}</p>\n            <ul class='modal-movie-data__btn-list'>\n                <li class='modal-movie-data__btn-item'  >\n                    <button id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-watched js-btn-to-watched' type='button' data-action='${e.id}'   >\n                        ADD TO WATCHED\n                    </button>\n                    <button  id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-watched active js-btn-from-watched' type='button' data-action='${e.id}'>\n                        REMOVE FROM WATCHED\n                    </button>\n                </li>\n                <li class='modal-movie-data__button-item' >\n                    <button  id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-queue js-btn-to-queue' type='button' data-action='${e.id}'>\n                        ADD TO QUEUE\n                    </button>\n                    <button id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-queue active js-btn-from-queue' type='button' data-action='${e.id}'>\n                        REMOVE FROM QUEUE\n                    </button>\n                </li>\n            </ul>\n            <div class="trailer-btn-wrapper">\n            <button  id='${e.id}' class='trailer-btn' type='button' data-action='${e.id}'>\n                        watch trailer\n                    </button>\n            </div>\n            </div>`;Q.innerHTML=i}(e)}(i),J())};function ae(e){if(K.classList.contains("btn-is-active")){const t=localStorage.getItem("WATCHED_LIST_DATA_KEY");return JSON.parse(t).find((t=>t.id===Number(e)))}{const t=localStorage.getItem("QUEUE_LIST_DATA_KEY");return JSON.parse(t).find((t=>t.id===Number(e)))}}
//# sourceMappingURL=gallery.a854901a.js.map
