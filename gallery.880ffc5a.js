function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("kyEFX",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"T57zD":"gallery.880ffc5a.js","7kCeP":"sprite.ca08d457.svg","8mxQD":"haker.f4ee20cb.jpg","hP01P":"taras_bogun.269d280e.jpg","9zuxn":"yulia.0cfe0448.jpg","gtHAk":"evgeniy.18e4e726.jpg","5znXU":"serhii.9abea59c.jpg","8p6Wm":"shatohin.aaa96f92.jpg","eL9qx":"serhii_p.ce69810a.jpg","4uvNs":"svetlana.47fe9927.jpg","3ntp2":"andreiv.d0dc592d.jpg","hoFNr":"dima.2451f850.jpg","bNA7a":"no-image.0b269193.jpg"}')),document.body.onload=function(){setTimeout((function(){let e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")}),500)};var r;r=new URL(a("kyEFX").resolve("7kCeP"),import.meta.url).toString();var l;l=new URL(a("kyEFX").resolve("8mxQD"),import.meta.url).toString();var d;d=new URL(a("kyEFX").resolve("hP01P"),import.meta.url).toString();var s;s=new URL(a("kyEFX").resolve("9zuxn"),import.meta.url).toString();var c;c=new URL(a("kyEFX").resolve("gtHAk"),import.meta.url).toString();var u;u=new URL(a("kyEFX").resolve("5znXU"),import.meta.url).toString();var m;m=new URL(a("kyEFX").resolve("8p6Wm"),import.meta.url).toString();var v;v=new URL(a("kyEFX").resolve("eL9qx"),import.meta.url).toString();var p;p=new URL(a("kyEFX").resolve("4uvNs"),import.meta.url).toString();var g;g=new URL(a("kyEFX").resolve("3ntp2"),import.meta.url).toString();var f;f=new URL(a("kyEFX").resolve("hoFNr"),import.meta.url).toString();const b=[{name:"Serhii Prokip",text:"Team lead. Footer, footer modal, Main and library modal function",img:t(v),linkedin:"https://www.linkedin.com/in/serhii-prokip-422782250",github:"https://github.com/iTSerhii85"},{name:"Yulia Safonova",text:"Scrum master. General styles",img:t(s),linkedin:"",github:"https://github.com/Yulia-Safonova-85"},{name:"Andrii Voznyi",text:"Developer. Main gallery, fetch function",img:t(g),linkedin:"https://www.linkedin.com/in/andrii-voznyi-8a95a6264/",github:"https://github.com/DWIJIx"},{name:"Roman Korzun",text:"Developer. Headers, up button, stiles",img:t(l),linkedin:"Button stiles",github:"https://github.com/romancarpangler"},{name:"Andrew Shatohin",text:"Developer. Library",img:t(m),linkedin:"https://www.linkedin.com/in/andrii-shatokhin-016672264/",github:"https://github.com/Andrew-Shatokhin"},{name:"Serhii",text:"Developer. Dark mode.",img:t(u),linkedin:"#",github:"https://github.com/Serj-Melnyk"},{name:"Dmitriy",text:"Developer. Main and library modal stiles.",img:t(f),linkedin:"https://www.linkedin.com/in/dmytro-novitskyi-576390264/",github:"https://github.com/Dmytro1001"},{name:"Taras Bohun",text:"Developer. Headers and up button.",img:t(d),linkedin:"https://www.linkedin.com/in/taras-bohun-94ab28262/",github:"https://github.com/TarasBohun"},{name:"Svitlana",text:"Developer. Main modal button function.",img:t(p),linkedin:"https://www.linkedin.com/in/%D1%81%D0%B2%D1%96%D1%82%D0%BB%D0%B0%D0%BD%D0%B0-%D1%88%D0%B2%D0%B8%D0%B4%D0%B0%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE-0b027385/",github:"https://github.com/Svitlana-Sh"},{name:"Evgeniy",text:"Developer. Pagination function.",img:t(c),linkedin:"https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD%D1%96%D0%B9-%D0%BA%D0%BB%D0%B8%D1%81%D0%B0%D0%BA-72a5978a/",github:"https://github.com/Simon507?tab=repositories"}],h=document.querySelector(".js-footer-modal");document.querySelector(".footer-open-modal_link").addEventListener("click",(function(){h.innerHTML=_;document.querySelector(".footer-modal-close-button").addEventListener("click",E);document.querySelector(".footer-modal-backdrop").addEventListener("click",y),document.addEventListener("keydown",E),document.body.style.overflow="hidden"}));const _=`\n<div class="footer-modal-backdrop">\n  <div class="footer-modal">\n    <button type="button" class="footer-modal-close-button">\n    X\n    </button>\n    <h2 class="our-team">Our team</h2>\n   ${b.map((e=>`\n<div class="developer">\n<div class="flip-card">\n  <div class="flip-card-inner">\n    <div class="flip-card-front">\n      <img src="${e.img}" alt="Developer ${e.name}" class="dev_photo" loading="lazy">\n    </div>\n    <div class="flip-card-back">\n      <a href="${e.github}" class="icon-github" target="_blank">\n        <svg width="50" height="50">\n          <use href="${t(r)}#icon-github"></use>\n        </svg>\n      </a>\n      <a href="${e.linkedin}" class="icon-linkedin" target="_blank">\n        <svg width="50" height="50">\n          <use href="${t(r)}#icon-linkedin"></use>\n        </svg>\n      </a>\n    </div>\n</div>\n</div>\n  <div class="border">\n    <div class="about">\n     <h4 class="dev-name">${e.name}</h4>\n      <p class="about-dev">${e.text}</p>\n    </div>\n  </div>\n</div>`)).join("")}\n  </div>\n</div>`;function y(e){"footer-modal-backdrop"===e.target.classList.value&&E()}function E(){h.innerHTML="",document.removeEventListener("keydown",E),document.body.style.overflow=""}var S;function k(e){const t=localStorage.getItem("GENRES_DATA_KEY"),n=JSON.parse(t);let o=[];const i=e.genre_ids;for(const e of n)i.includes(e.id)&&o.push(e.name);let a="";return 0===o.length?a="Unknown genre":o.length<=2?a=o.join(", "):(o.splice(2,o.length),a=o.join(", ")+", Other"),a}function w(e){const t=localStorage.getItem("GENRES_DATA_KEY"),n=JSON.parse(t);let o=[];const i=e.genre_ids;for(const e of n)i.includes(e.id)&&o.push(e.name);let a="";return a=0===o.length?"Unknown genre":o.join(", "),a}S=new URL(a("kyEFX").resolve("bNA7a"),import.meta.url).toString();const D=document.querySelector(".js-watched-lib-btn"),L=document.querySelector(".js-queue-lib-btn"),A=document.querySelector(".js-library-gallery"),T=document.querySelector(".info-notify-box");document.querySelector(".info-notify-text");function H(e){const t=localStorage.getItem(e);return JSON.parse(t)}const $=H("WATCHED_LIST_DATA_KEY");H("QUEUE_LIST_DATA_KEY");function F(e){if(!e||!e.length)return R(),T.classList.remove("is-hidden");const n=e.map((e=>{R(),k(e);let n="";return n=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:t(S),` <li class="card-wraper" id="${e.id}">\n       <a class="card-wraper_link" href="#"><img class="card-img" src="${n}" alt="${e.title||e.name}"/></a>\n       <div class="card-title">${e.title||e.name}</div>\n      <div class="wraper">\n         <div class="card-genre-wraper">\n           <div class="card-genre">${k(e)}</div>\n         </div>\n         <div class="card-year">\n\n         ${e.release_date.slice(0,4)||e.first_air_date.slice(0,4)||""}\n\n         </div>\n         <div class="card-rating-wraper"><div class="card-rating">${e.vote_average.toFixed(1)}</div></div>\n       </div>\n     </li>`})).join("");A.insertAdjacentHTML("beforeend",n)}function U(){D.classList.add("btn-is-active"),L.classList.remove("btn-is-active"),T.classList.add("is-hidden");const e=localStorage.getItem("WATCHED_LIST_DATA_KEY");F(JSON.parse(e))}function j(){T.classList.add("is-hidden"),L.classList.add("btn-is-active"),D.classList.remove("btn-is-active");const e=localStorage.getItem("QUEUE_LIST_DATA_KEY");F(JSON.parse(e))}function R(){A.innerHTML=""}F($),D.classList.add("btn-is-active"),D.addEventListener("click",U),L.addEventListener("click",j);const q=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),I=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),x=matchMedia("(prefers-color-scheme: dark)"),B=document.querySelectorAll(".switcher__radio");function O(e){!function(e){let t,n;"auto"===e?(t="(prefers-color-scheme: light)",n="(prefers-color-scheme: dark)"):(t="light"===e?"all":"not all",n="dark"===e?"all":"not all");[...q].forEach((e=>{e.media=t})),[...I].forEach((e=>{e.media=n}))}(e),"auto"===e?localStorage.removeItem("color-scheme"):function(e){localStorage.setItem("color-scheme",e)}(e)}function N(){return localStorage.getItem("color-scheme")}function Y(e){localStorage.setItem("WATCHED_LIST_DATA_KEY",JSON.stringify(e))}function M(e){localStorage.setItem("QUEUE_LIST_DATA_KEY",JSON.stringify(e))}let K,X,C,P,J;!function(){const e=N();if(null!==e){document.querySelector(`.switcher__radio[value=${e}]`).checked=!0}[...B].forEach((e=>{e.addEventListener("change",(e=>{O(e.target.value)}))}))}(),function(){const e=N(),t=x.matches?"dark":"light";null!==e&&e!==t&&O(e)}(),window.addEventListener("scroll",(()=>{document.documentElement.style.setProperty("--scroll-y",`${window.scrollY}px`)}));const W=document.querySelector(".js-watched-lib-btn"),Q=document.querySelector(".js-library-gallery"),z=document.querySelector(".backdrop-modal"),V=document.querySelector(".button-close"),G=document.querySelector(".modal-movie-card");function Z(e){const t=localStorage.getItem(e);return JSON.parse(t)}function ee(e){X=document.querySelector(".js-btn-to-watched"),C=document.querySelector(".js-btn-from-watched"),P=document.querySelector(".js-btn-to-queue"),J=document.querySelector(".js-btn-from-queue"),K=+X.id,X.addEventListener("click",oe),C.addEventListener("click",ie),P.addEventListener("click",ae),J.addEventListener("click",re),function(){const e=Z("WATCHED_LIST_DATA_KEY")||[],t=Z("QUEUE_LIST_DATA_KEY")||[];let n=e.find((e=>e.id===K));const o=t.find((e=>e.id===K));0!==e.length&&n||te(C);0!==t.length&&o||te(J);n&&te(X);o&&te(P)}(),V.addEventListener("click",le),z.addEventListener("click",(e=>function(e){if("backdrop-modal"!==e.target.classList.value)return;le()}(e))),document.addEventListener("keydown",(e=>de(e))),z.classList.remove("is-hidden"),setTimeout((()=>{z.firstElementChild.classList.remove("is-hidden")}),350),document.body.classList.add("modal-open")}function te(e){e.style.display="none"}function ne(e){e.style.display=""}function oe(e){const t=ce(K),n=Z("WATCHED_LIST_DATA_KEY")||[];n.find((e=>e.id===K))||(n.push(t),Y(n),te(X),ne(C))}function ie(){const e=Z("WATCHED_LIST_DATA_KEY")||[];if(e.find((e=>e.id===K))){Y(e.filter((e=>e.id!==K))),te(C),ne(X)}W.classList.contains("btn-is-active")&&U()}function ae(){const e=ce(K),t=Z("QUEUE_LIST_DATA_KEY")||[];t.find((e=>e.id===K))||(t.push(e),M(t),te(P),ne(J))}function re(){const e=Z("QUEUE_LIST_DATA_KEY")||[];if(e.find((e=>e.id===K))){M(e.filter((e=>e.id!==K))),te(J),ne(P)}W.classList.contains("btn-is-active")||j()}function le(e){z.classList.add("is-hidden"),z.firstElementChild.classList.remove("is-hidden"),V.removeEventListener("click",le),z.removeEventListener("click",le),document.removeEventListener("keydown",(e=>de(e))),document.body.classList.remove("modal-open"),z.style.background="";const t=document.body,n=t.style.top;t.style.position="",t.style.top="",window.scrollTo(0,-1*parseInt(n||"0"))}function de(e){"Escape"===e.key&&le()}Q.addEventListener("click",(e=>{"IMG"===e.target.nodeName&&se(e)}));const se=e=>{const n=document.documentElement.style.getPropertyValue("--scroll-y"),o=document.body;o.style.position="fixed",o.style.top=`-${n}`;const i=ce(e.target.closest("li").id);i&&(K=i.id,function(e){if(null!==e.backdrop_path){const t=`https://image.tmdb.org/t/p/original/${e.backdrop_path}`;z.style.backgroundImage=`url('${t}')`,z.style.backgroundSize="cover",z.style.backgroundPosition="50% 50%"}!function(e){const n="https://image.tmdb.org/t/p/w500";let o="";o=e.poster_path?`${n}${e.poster_path}`:t(S);const i=`\n      <div class='modal-movie-card__wrappe-img'>\n                <img id="${e.id}" class="modal-movie-card__image" src="${o}" alt="${e.title||e.name}" />\n            </div>\n            <div class='modal-movie-data'>\n                <h2 class='modal-movie-data__title'>${e.title||e.name}</h2>\n            <table class='modal-movie-data-table'>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p class='modal-movie-data__attribute'>Vote / Votes</p>\n                    </td>\n                    <td>\n                        <p><span class='modal-movie-data__vote'>${e.vote_average.toFixed(1)}</span> / ${e.vote_count}</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Popularity</p>\n                    </td>\n                    <td>\n                        <p>${e.popularity.toFixed(1)}</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Original Title</p>\n                    </td>\n                    <td>\n                        <p>${e.original_title}</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Genre</p>\n                    </td>\n                    <td>\n                        <p>${w(e)}</p>\n                    </td>\n                </tr>\n            </table>\n            <h3 class='modal-movie-data__about_title'>About</h3>\n            <p class='modal-movie-data__about'>${e.overview}</p>\n            <ul class='modal-movie-data__btn-list'>\n                <li class='modal-movie-data__btn-item'  >\n                    <button id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-watched js-btn-to-watched' type='button' data-action='${e.id}'   >\n                        ADD TO WATCHED\n                    </button>\n                    <button  id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-watched active js-btn-from-watched' type='button' data-action='${e.id}'>\n                        REMOVE FROM WATCHED\n                    </button>\n                </li>\n                <li class='modal-movie-data__button-item' >\n                    <button  id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-queue js-btn-to-queue' type='button' data-action='${e.id}'>\n                        ADD TO QUEUE\n                    </button>\n                    <button id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-queue active js-btn-from-queue' type='button' data-action='${e.id}'>\n                        REMOVE FROM QUEUE\n                    </button>\n                </li>\n            </ul>\n            <div class="trailer-btn-wrapper">\n            <button  id='${e.id}' class='trailer-btn' type='button' data-action='${e.id}'>\n                        watch trailer\n                    </button>\n            </div>\n            </div>`;G.innerHTML=i}(e)}(i),ee())};function ce(e){if(W.classList.contains("btn-is-active")){const t=localStorage.getItem("WATCHED_LIST_DATA_KEY");return JSON.parse(t).find((t=>t.id===Number(e)))}{const t=localStorage.getItem("QUEUE_LIST_DATA_KEY");return JSON.parse(t).find((t=>t.id===Number(e)))}}
//# sourceMappingURL=gallery.880ffc5a.js.map
