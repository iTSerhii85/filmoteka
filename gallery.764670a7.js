function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"T57zD":"gallery.764670a7.js","bNA7a":"no-image.0b269193.jpg","iH3o9":"gallery.e7eadedf.js"}')),a("ioBS9"),a("6HA5D");var o;o=new URL(a("kyEFX").resolve("bNA7a"),import.meta.url).toString();var d=a("hielw"),s=a("2nhTy");const l=document.querySelector(".js-watched-lib-btn"),r=document.querySelector(".js-queue-lib-btn"),c=document.querySelector(".js-library-gallery"),u=document.querySelector(".info-notify-box"),m=(document.querySelector(".info-notify-text"),document.querySelector(".pagination"));let _=1,p=1;function v(t){const e=localStorage.getItem(t),n=JSON.parse(e);return n?(p=Math.ceil(n.length/20),(0,s.paginationMarkUp)(_,p),n):u.classList.remove("is-hidden")}window.addEventListener("load",(function(){setTimeout((function(){l.click()}),0)}));let b=v("WATCHED_LIST_DATA_KEY"),f=v("QUEUE_LIST_DATA_KEY");function g(e){if(!e||!e.length)return L(),u.classList.remove("is-hidden");const n=e.map((e=>{L(),(0,d.checkGenresById)(e);let n="";return n=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:t(o),` <li class="card-wraper" id="${e.id}">\n       <a class="card-wraper_link" href="#"><img class="card-img" src="${n}" alt="${e.title||e.name}"/></a>\n       <div class="card-title">${e.title||e.name}</div>\n      <div class="wraper">\n         <div class="card-genre-wraper">\n           <div class="card-genre">${(0,d.checkGenresById)(e)}</div>\n         </div>\n         <div class="card-year">\n\n         ${e.release_date.slice(0,4)||e.first_air_date.slice(0,4)||""}\n\n         </div>\n         <div class="card-rating-wraper"><div class="card-rating">${e.vote_average.toFixed(1)}</div></div>\n       </div>\n     </li>`})).join("");c.insertAdjacentHTML("beforeend",n)}function E(t){l.classList.add("btn-is-active"),r.classList.remove("btn-is-active"),u.classList.add("is-hidden"),1!=t&&(_=1);let e=localStorage.getItem("WATCHED_LIST_DATA_KEY"),n=JSON.parse(e);if(!n||0===n.length)return L(),m.style.display="none",u.classList.remove("is-hidden");{m.style.display="flex",p=Math.ceil(n.length/20),(0,s.paginationMarkUp)(_,p);let t=20*(_-1),e=20*(_-1)+20;g(n.slice(t,e))}}function y(t){u.classList.add("is-hidden"),r.classList.add("btn-is-active"),l.classList.remove("btn-is-active");let e=localStorage.getItem("QUEUE_LIST_DATA_KEY"),n=JSON.parse(e);if(1!=t&&(_=1),!n||!n.length)return L(),m.style.display="none",u.classList.remove("is-hidden");{m.style.display="flex",p=Math.ceil(n.length/20),(0,s.paginationMarkUp)(_,p);let t=20*(_-1),e=20*(_-1)+20;g(n.slice(t,e))}}function L(){c.innerHTML=""}g(b),l.classList.add("btn-is-active"),l.addEventListener("click",E),r.addEventListener("click",y),m.addEventListener("click",(function(t){if("..."==t.target.textContent)return;if("P"!==t.target.nodeName)return;_=t.target.textContent,">>"==t.target.textContent&&(_=Number(targetPage.textContent)+1);"<<"==t.target.textContent&&(_=Number(targetPage.textContent)-1);(0,s.paginationMarkUp)(_,p),function(t){let e=20*(t-1),n=20*(t-1)+20;b=v("WATCHED_LIST_DATA_KEY"),f=v("QUEUE_LIST_DATA_KEY"),l.classList.contains("btn-is-active")?g(b.slice(e,n)):g(f.slice(e,n))}(_)})),a("lAhPt");d=a("hielw");function h(t){localStorage.setItem("WATCHED_LIST_DATA_KEY",JSON.stringify(t))}function T(t){localStorage.setItem("QUEUE_LIST_DATA_KEY",JSON.stringify(t))}let S,A,w,D,k;window.addEventListener("scroll",(()=>{document.documentElement.style.setProperty("--scroll-y",`${window.scrollY}px`)}));let $="";const I=document.querySelector(".js-watched-lib-btn"),U=document.querySelector(".js-library-gallery"),q=document.querySelector(".backdrop-modal"),H=document.querySelector(".button-close"),x=document.querySelector(".modal-movie-card");function O(t){const e=localStorage.getItem(t);return JSON.parse(e)}function C(t){A=document.querySelector(".js-btn-to-watched"),w=document.querySelector(".js-btn-from-watched"),D=document.querySelector(".js-btn-to-queue"),k=document.querySelector(".js-btn-from-queue"),S=+A.id,A.addEventListener("click",M),w.addEventListener("click",K),D.addEventListener("click",Y),k.addEventListener("click",F),function(){const t=O("WATCHED_LIST_DATA_KEY")||[],e=O("QUEUE_LIST_DATA_KEY")||[];let n=t.find((t=>t.id===S));const i=e.find((t=>t.id===S));0!==t.length&&n||N(w);0!==e.length&&i||N(k);n&&N(A);i&&N(D)}(),H.addEventListener("click",Q),q.addEventListener("click",(t=>function(t){if("backdrop-modal"!==t.target.classList.value)return;Q()}(t))),document.addEventListener("keydown",(t=>R(t))),q.classList.remove("is-hidden"),setTimeout((()=>{q.firstElementChild.classList.remove("is-hidden")}),350),document.body.classList.add("modal-open")}function N(t){t.style.display="none"}function j(t){t.style.display=""}function M(){const t=J(S),e=O("WATCHED_LIST_DATA_KEY")||[];e.find((t=>t.id===S))||(e.push(t),h(e),N(A),j(w))}function K(){const t=O("WATCHED_LIST_DATA_KEY")||[];if(t.find((t=>t.id===S))){h(t.filter((t=>t.id!==S))),N(w),j(A)}I.classList.contains("btn-is-active")&&(E($=1),N(A),j(w))}function Y(){const t=J(S),e=O("QUEUE_LIST_DATA_KEY")||[];e.find((t=>t.id===S))||(e.push(t),T(e),N(D),j(k))}function F(){const t=O("QUEUE_LIST_DATA_KEY")||[];if(t.find((t=>t.id===S))){T(t.filter((t=>t.id!==S))),N(k),j(D)}I.classList.contains("btn-is-active")||(y($=1),N(D),j(k))}function Q(t){q.classList.add("is-hidden"),q.firstElementChild.classList.remove("is-hidden"),H.removeEventListener("click",Q),q.removeEventListener("click",Q),document.removeEventListener("keydown",(t=>R(t))),document.body.classList.remove("modal-open"),q.style.background="";const e=document.body,n=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,-1*parseInt(n||"0"))}function R(t){"Escape"===t.key&&Q()}U.addEventListener("click",(t=>{"IMG"===t.target.nodeName&&W(t)}));const W=e=>{const n=document.documentElement.style.getPropertyValue("--scroll-y"),i=document.body;i.style.position="fixed",i.style.top=`-${n}`;const a=J(e.target.closest("li").id);a&&(S=a.id,function(e){if(null!==e.backdrop_path){const t=`https://image.tmdb.org/t/p/original/${e.backdrop_path}`;q.style.backgroundImage=`url('${t}')`,q.style.backgroundSize="cover",q.style.backgroundPosition="50% 50%"}!function(e){const n="https://image.tmdb.org/t/p/w500";let i="";i=e.poster_path?`${n}${e.poster_path}`:t(o);const a=`\n      <div class='modal-movie-card__wrappe-img'>\n                <img id="${e.id}" class="modal-movie-card__image" src="${i}" alt="${e.title||e.name}" />\n            </div>\n            <div class='modal-movie-data'>\n                <h2 class='modal-movie-data__title'>${e.title||e.name}</h2>\n            <table class='modal-movie-data-table'>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p class='modal-movie-data__attribute'>Vote / Votes</p>\n                    </td>\n                    <td>\n                        <p><span class='modal-movie-data__vote'>${e.vote_average.toFixed(1)}</span> / ${e.vote_count}</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Popularity</p>\n                    </td>\n                    <td>\n                        <p>${e.popularity.toFixed(1)}</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Original Title</p>\n                    </td>\n                    <td>\n                        <p>${e.original_title}</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Genre</p>\n                    </td>\n                    <td>\n                        <p>${(0,d.checkGenresByIdModal)(e)}</p>\n                    </td>\n                </tr>\n            </table>\n            <h3 class='modal-movie-data__about_title'>About</h3>\n            <p class='modal-movie-data__about'>${e.overview}</p>\n            <ul class='modal-movie-data__btn-list'>\n                <li class='modal-movie-data__btn-item'  >\n                    <button id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-watched js-btn-to-watched' type='button' data-action='${e.id}'   >\n                        ADD TO WATCHED\n                    </button>\n                    <button  id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-watched active js-btn-from-watched' type='button' data-action='${e.id}'>\n                        REMOVE FROM WATCHED\n                    </button>\n                </li>\n                <li class='modal-movie-data__button-item' >\n                    <button  id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-queue js-btn-to-queue' type='button' data-action='${e.id}'>\n                        ADD TO QUEUE\n                    </button>\n                    <button id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-queue active js-btn-from-queue' type='button' data-action='${e.id}'>\n                        REMOVE FROM QUEUE\n                    </button>\n                </li>\n            </ul>\n            <div class="trailer-btn-wrapper">\n            <button  id='${e.id}' class='trailer-btn' type='button' data-action='${e.id}'>\n                        watch trailer\n                    </button>\n            </div>\n            </div>`;x.innerHTML=a}(e)}(a),C())};function J(t){if(I.classList.contains("btn-is-active")){const e=localStorage.getItem("WATCHED_LIST_DATA_KEY");return JSON.parse(e).find((e=>e.id===Number(t)))}{const e=localStorage.getItem("QUEUE_LIST_DATA_KEY");return JSON.parse(e).find((e=>e.id===Number(t)))}}a("eDoKO");
//# sourceMappingURL=gallery.764670a7.js.map
