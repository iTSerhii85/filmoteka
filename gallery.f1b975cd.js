function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequired7c6=i),i("kyEFX").register(JSON.parse('{"T57zD":"gallery.f1b975cd.js","bNA7a":"no-image.0b269193.jpg","iH3o9":"gallery.98c730a9.js"}')),i("ioBS9"),i("6HA5D");var o;o=new URL(i("kyEFX").resolve("bNA7a"),import.meta.url).toString();var d=i("hielw"),r=i("2nhTy");const l=document.querySelector(".pagination");let s=1;const c=document.querySelector(".js-watched-lib-btn"),u=document.querySelector(".js-queue-lib-btn"),m=document.querySelector(".js-library-gallery"),_=document.querySelector(".info-notify-box");document.querySelector(".info-notify-text");function v(t){const e=localStorage.getItem(t),n=JSON.parse(e);if(null!==n)return maxPage=Math.ceil(n.length/20),(0,r.paginationMarkUp)(s,maxPage),n}window.addEventListener("load",(function(){setTimeout((function(){c.click()}),0)}));const p=v("WATCHED_LIST_DATA_KEY"),b=v("QUEUE_LIST_DATA_KEY");function g(e){if(null===e)return f(),_.classList.remove("is-hidden");const n=e.map((e=>{f(),(0,d.checkGenresById)(e);let n="";return n=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:t(o),` <li class="card-wraper" id="${e.id}">\n       <a class="card-wraper_link" href="#"><img class="card-img" src="${n}" alt="${e.title||e.name}"/></a>\n       <div class="card-title">${e.title||e.name}</div>\n      <div class="wraper">\n         <div class="card-genre-wraper">\n           <div class="card-genre">${(0,d.checkGenresById)(e)}</div>\n         </div>\n         <div class="card-year">\n\n         ${e.release_date.slice(0,4)||e.first_air_date.slice(0,4)||""}\n\n         </div>\n         <div class="card-rating-wraper"><div class="card-rating">${e.vote_average.toFixed(1)}</div></div>\n       </div>\n     </li>`})).join("");m.insertAdjacentHTML("beforeend",n)}function f(){m.innerHTML=""}g(p),c.classList.add("btn-is-active"),c.addEventListener("click",(function(){let t=localStorage.getItem("WATCHED_LIST_DATA_KEY"),e=JSON.parse(t);maxPage=Math.ceil(e.length/20),(0,r.paginationMarkUp)(s,maxPage),c.classList.add("btn-is-active"),u.classList.remove("btn-is-active"),_.classList.add("is-hidden"),g(p)})),u.addEventListener("click",(function(){let t=localStorage.getItem("QUEUE_LIST_DATA_KEY"),e=JSON.parse(t);maxPage=Math.ceil(e.length/20),(0,r.paginationMarkUp)(s,maxPage),_.classList.add("is-hidden"),u.classList.add("btn-is-active"),c.classList.remove("btn-is-active"),g(b)})),l.addEventListener("click",(function(t){if("..."==t.target.textContent)return;if("P"!==t.target.nodeName)return;s=t.target.textContent,">>"==t.target.textContent&&(s=Number(targetPage.textContent)+1);"<<"==t.target.textContent&&(s=Number(targetPage.textContent)-1);(0,r.paginationMarkUp)(s,maxPage);let e=20*(s-1)-1,n=20*(s-1)+20;if(c.classList.contains("btn-is-active")){const t=p,a=t.slice(e,n);console.log(t),console.log(a),g(a)}})),i("lAhPt");d=i("hielw");let E=$("WATCHED_LIST_DATA_KEY");function T(t){localStorage.setItem("WATCHED_LIST_DATA_KEY",JSON.stringify(t))}let y=$("QUEUE_LIST_DATA_KEY");function h(t){localStorage.setItem("QUEUE_LIST_DATA_KEY",JSON.stringify(t))}let S=null;const A=document.querySelector(".js-library-gallery"),L=document.querySelector(".backdrop-modal"),w=document.querySelector(".button-close"),k=document.querySelector(".modal-movie-card");function $(t){const e=localStorage.getItem(t);return JSON.parse(e)}function D(t){null===E&&(E=new Array),null===y&&(y=new Array);const e=document.querySelector(".js-btn-to-watched"),n=document.querySelector(".js-btn-from-watched"),a=document.querySelector(".js-btn-to-queue"),i=document.querySelector(".js-btn-from-queue");e.addEventListener("click",I),n.addEventListener("click",U),a.addEventListener("click",q),i.addEventListener("click",x),w.addEventListener("click",H),L.addEventListener("click",(t=>function(t){if("backdrop-modal"!==t.target.classList.value)return;H()}(t))),document.addEventListener("keydown",(t=>N(t))),L.classList.remove("is-hidden"),setTimeout((()=>{L.firstElementChild.classList.remove("is-hidden")}),350),document.body.classList.add("modal-open")}function I(t){const e=+t.currentTarget.id,n=C(e),a=$("WATCHED_LIST_DATA_KEY")||[];a.find((t=>t.id===e))||(a.push(n),T(a))}function U(t){const e=+t.currentTarget.id,n=a.find((t=>t.id===e)),a=$("WATCHED_LIST_DATA_KEY")||[];if(n){E.remove();T(a.filter((t=>t.id!==e)))}}function q(t){const e=+t.currentTarget.id,n=C(e),a=$("QUEUE_LIST_DATA_KEY")||[];a.find((t=>t.id===e))||(a.push(n),h(a))}function x(t){const e=+t.currentTarget.id;if(($("QUEUE_LIST_DATA_KEY")||[]).find((t=>t.id===e))){y.remove(e);h(watchedFilms.filter((t=>t.id!==e)))}}function H(t){L.classList.add("is-hidden"),L.firstElementChild.classList.remove("is-hidden"),w.removeEventListener("click",H),L.removeEventListener("click",H),document.removeEventListener("keydown",(t=>N(t))),document.body.classList.remove("modal-open"),L.style.background=""}function N(t){"Escape"===t.key&&H()}A.addEventListener("click",(t=>{"IMG"===t.target.nodeName&&O(t)}));const O=e=>{const n=C(e.target.closest("li").id);n&&(S=n.id,function(e){if(null!==e.backdrop_path){const t=`https://image.tmdb.org/t/p/original/${e.backdrop_path}`;L.style.backgroundImage=`url('${t}')`,L.style.backgroundSize="cover",L.style.backgroundPosition="50% 50%"}!function(e){const n="https://image.tmdb.org/t/p/w500";let a="";a=e.poster_path?`${n}${e.poster_path}`:t(o);const i=`\n            <div class='modal-movie-card__wrappe-img'>\n                <img id="${e.id}" class="modal-movie-card__image" src="${a}" alt="${e.title||e.name}"/>\n            </div>\n            <div class='modal-movie-data'>\n                <h2 class='modal-movie-data__title'>${e.title||e.name}</h2>\n                <h3 class='modal-movie-data__about_title'>About</h3>\n\n                <table class='modal-movie-data-table'>\n                    <tr class='modal-movie-data-table__row'>\n                        <td>\n                            <p class='modal-movie-data__attribute'>Vote / Votes</p>\n                        </td>\n                        <td>\n                            <p><span class='modal-movie-data__vote'>${e.vote_average.toFixed(1)}</span> / ${e.vote_count}</p>\n                        </td>\n                    </tr>\n                    <tr class='modal-movie-data-table__row'>\n                        <td>\n                            <p>Popularity</p>\n                        </td>\n                        <td>\n                            <p>${e.popularity.toFixed(1)}</p>\n                        </td>\n                    </tr>\n                    <tr class='modal-movie-data-table__row'>\n                        <td>\n                            <p>Original Title</p>\n                        </td>\n                        <td>\n                            <p>${e.original_title}</p>\n                        </td>\n                    </tr>\n                    <tr class='modal-movie-data-table__row'>\n                        <td>\n                            <p>Genre</p>\n                        </td>\n                        <td>\n                            <p>${(0,d.checkGenresById)(e)}</p>\n                        </td>\n                    </tr>\n\n                </table>\n                \n                <p class='modal-movie-data__about'>${e.overview}</p>\n                <ul class='modal-movie-data__btn-list'>\n                    <li class='modal-movie-data__btn-item'  >\n                        <button id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-watched js-btn-to-watched' type='button' data-action='${e.id}'>\n                            ADD TO WATCHED\n                        </button>\n                        <button  id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-watched active is-hidden-btn js-btn-from-watched' type='button' data-action='${e.id}'>\n                            REMOVE FROM WATCHED\n                        </button>\n                    </li>\n                    <li class='modal-movie-data__button-item' >\n                        <button  id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-queue js-btn-to-queue' type='button' data-action='${e.id}'>\n                            ADD TO QUEUE\n                        </button>\n                        <button id='${e.id}' class='modal-movie-data__btn modal-movie-data__btn-queue active is-hidden-btn js-btn-from-queue' type='button' data-action='${e.id}'>\n                            REMOVE FROM QUEUE\n                        </button>\n                    </li>\n                </ul>\n                <div class="trailer-btn-wrapper">\n                    <button  id='${e.id}' class='trailer-btn' type='button' data-action='${e.id}'>\n                        watch trailer\n                    </button>\n                </div>\n            </div>`;k.innerHTML=i}(e)}(n),D())};function C(t){const e=localStorage.getItem("QUEUE_LIST_DATA_KEY"),n=JSON.parse(e).find((e=>e.id===Number(t)));if(!n){const e=localStorage.getItem("WATCHED_LIST_DATA_KEY");return JSON.parse(e).find((e=>e.id===Number(t)))}return n}
//# sourceMappingURL=gallery.f1b975cd.js.map
