var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("ioBS9"),a("6HA5D");var i=a("2nhTy");const r=document.querySelector(".pagination");let o=1;const s=document.querySelector(".js-watched-lib-btn"),l=document.querySelector(".js-queue-lib-btn"),c=document.querySelector(".js-library-gallery"),d=document.querySelector(".info-notify-box");document.querySelector(".info-notify-text");function g(e){const t=localStorage.getItem(e),n=JSON.parse(t);return console.log(n),n}const u=g("TRENDING_DATA_KEY"),p=g("SEARCH_RESULT_DATA_KEY");function f(e){if(0===e.length)return m(),d.classList.remove("is-hidden");const t=e.map((e=>(m(),v(e),` <li class="card-wraper" id="${e.id}">\n       <img class="card-img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="#" />\n       <div class="card-title">${e.title||e.name}</div>\n      <div class="wraper">\n         <div class="card-genre-wraper">\n           <div class="card-genre">${v(e)}</div>\n         </div>\n         <div class="card-year">\n         ${e.release_date.slice(0,4)||e.first_air_date.slice(0,4)||""}\n         </div>\n         <div class="card-rating-wraper"><div class="card-rating">${e.vote_average.toFixed(1)}</div></div>\n       </div>\n     </li>`))).join("");c.insertAdjacentHTML("beforeend",t),o=1;let n=localStorage.getItem("SEARCH_RESULT_DATA_KEY"),a=JSON.parse(n);console.log(a),maxPage=a.length/20,(0,i.paginationMarkUp)(o,maxPage)}function v(e){const t=localStorage.getItem("GENRES_DATA_KEY"),n=JSON.parse(t);let a=[];const i=e.genre_ids;for(const e of n)i.includes(e.id)&&a.push(e.name);let r="";return 0===a.length?r="Unknown genre":a.length<=2?r=a.join(", "):(a.splice(2,a.length),r=a.join(", ")+", Other"),r}function m(){c.innerHTML=""}f(u),s.classList.add("btn-is-active"),s.addEventListener("click",(function(){o=1;let e=localStorage.getItem("SEARCH_RESULT_DATA_KEY"),t=JSON.parse(e);maxPage=t.length/20,(0,i.paginationMarkUp)(o,maxPage),s.classList.add("btn-is-active"),l.classList.remove("btn-is-active"),d.classList.add("is-hidden"),f(u)})),l.addEventListener("click",(function(){o=1;let e=localStorage.getItem("SEARCH_RESULT_DATA_KEY"),t=JSON.parse(e);maxPage=t.length/20,(0,i.paginationMarkUp)(o,maxPage),d.classList.add("is-hidden"),l.classList.add("btn-is-active"),s.classList.remove("btn-is-active"),f(p)})),r.addEventListener("click",(function(e){if("..."==e.target.textContent)return;if("P"!==e.target.nodeName)return;o=e.target.textContent,(0,i.paginationMarkUp)(o,maxPage)}));
//# sourceMappingURL=gallery.1ee1cfa5.js.map
