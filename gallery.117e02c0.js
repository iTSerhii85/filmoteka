!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("4smAb",(function(e,t){document.body.onload=function(){setTimeout((function(){var e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")}),500)}})),i.register("4F07H",(function(e,n){var r=i("3EsMP"),o=i("b71oo"),a=document.querySelector(".js-footer-modal");document.querySelector(".footer-open-modal_link").addEventListener("click",(function(){a.innerHTML=c,document.querySelector(".footer-modal-close-button").addEventListener("click",s),document.querySelector(".footer-modal-backdrop").addEventListener("click",u),document.addEventListener("keydown",s),document.body.style.overflow="hidden"}));var l=o.developers.map((function(e){return'\n<div class="developer">\n<div class="flip-card">\n  <div class="flip-card-inner">\n    <div class="flip-card-front">\n      <img src="'.concat(e.img,'" alt="Developer ').concat(e.name,'" class="dev_photo" loading="lazy">\n    </div>\n    <div class="flip-card-back">\n      <a href="').concat(e.github,'" class="icon-github" target="_blank">\n        <svg width="50" height="50">\n          <use href="').concat(t(r),'#icon-github"></use>\n        </svg>\n      </a>\n      <a href="').concat(e.linkedin,'" class="icon-linkedin" target="_blank">\n        <svg width="50" height="50">\n          <use href="').concat(t(r),'#icon-linkedin"></use>\n        </svg>\n      </a>\n    </div>\n</div>\n</div>\n  <div class="border">\n    <div class="about">\n     <h4 class="dev-name">').concat(e.name,'</h4>\n      <p class="about-dev">').concat(e.text,"</p>\n    </div>\n  </div>\n</div>")})).join(""),c='\n<div class="footer-modal-backdrop">\n  <div class="footer-modal">\n    <button type="button" class="footer-modal-close-button">\n    X\n    </button>\n    <h2 class="our-team">Our team</h2>\n   '.concat(l,"\n  </div>\n</div>");function u(e){"footer-modal-backdrop"===e.target.classList.value&&s()}function s(){a.innerHTML="",document.removeEventListener("keydown",s),document.body.style.overflow=""}})),i.register("3EsMP",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("JQ8i3")})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i.register("b71oo",(function(n,r){e(n.exports,"developers",(function(){return h}));var o=i("drVwq"),a=i("2YMfR"),l=i("7gKbX"),c=i("6TFbV"),u=i("54ftg"),s=i("Dy1QI"),d=i("Yh3kC"),f=i("9fIAY"),g=i("2gIFF"),p=i("78Bps"),h=[{name:"Serhii Prokip",text:"Team lead. Footer, footer modal, Main and library modal function",img:t(d),linkedin:"https://www.linkedin.com/in/serhii-prokip-422782250",github:"https://github.com/iTSerhii85"},{name:"Yulia Safonova",text:"Scrum master. General styles",img:t(l),linkedin:"",github:"https://github.com/Yulia-Safonova-85"},{name:"Andrii Voznyi",text:"Developer. Main gallery, fetch function",img:t(g),linkedin:"https://www.linkedin.com/in/andrii-voznyi-8a95a6264/",github:"https://github.com/DWIJIx"},{name:"Roman Korzun",text:"Developer. Headers, up button, stiles",img:t(o),linkedin:"Button stiles",github:"https://github.com/romancarpangler"},{name:"Andrew Shatohin",text:"Developer. Library",img:t(s),linkedin:"https://www.linkedin.com/in/andrii-shatokhin-016672264/",github:"https://github.com/Andrew-Shatokhin"},{name:"Serhii",text:"Developer. Dark mode.",img:t(u),linkedin:"#",github:"https://github.com/Serj-Melnyk"},{name:"Dmitriy",text:"Developer. Main and library modal stiles.",img:t(p),linkedin:"https://www.linkedin.com/in/dmytro-novitskyi-576390264/",github:"https://github.com/Dmytro1001"},{name:"Taras Bohun",text:"Developer. Headers and up button.",img:t(a),linkedin:"https://www.linkedin.com/in/taras-bohun-94ab28262/",github:"https://github.com/TarasBohun"},{name:"Svitlana",text:"Developer. Main modal button function.",img:t(f),linkedin:"https://www.linkedin.com/in/%D1%81%D0%B2%D1%96%D1%82%D0%BB%D0%B0%D0%BD%D0%B0-%D1%88%D0%B2%D0%B8%D0%B4%D0%B0%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE-0b027385/",github:"https://github.com/Svitlana-Sh"},{name:"Evgeniy",text:"Developer. Pagination function.",img:t(c),linkedin:"https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD%D1%96%D0%B9-%D0%BA%D0%BB%D0%B8%D1%81%D0%B0%D0%BA-72a5978a/",github:"https://github.com/Simon507?tab=repositories"}]})),i.register("drVwq",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("aYzlh")})),i.register("2YMfR",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("bl282")})),i.register("7gKbX",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("haOpi")})),i.register("6TFbV",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("4SkQd")})),i.register("54ftg",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("1qffy")})),i.register("Dy1QI",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("7EIXr")})),i.register("Yh3kC",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("8fHWd")})),i.register("9fIAY",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("gOxud")})),i.register("2gIFF",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("4MTil")})),i.register("78Bps",(function(e,t){e.exports=i("aNJCr").getBundleURL("6teei")+i("iE7OH").resolve("cpRjw")})),i.register("4ot2A",(function(t,n){function r(e){var t=localStorage.getItem("GENRES_DATA_KEY"),n=JSON.parse(t),r=[],o=e.genre_ids,i=!0,a=!1,l=void 0;try{for(var c,u=n[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var s=c.value;o.includes(s.id)&&r.push(s.name)}}catch(e){a=!0,l=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw l}}var d="";return 0===r.length?d="Unknown genre":r.length<=2?d=r.join(", "):(r.splice(2,r.length),d=r.join(", ")+", Other"),d}function o(e){var t=localStorage.getItem("GENRES_DATA_KEY"),n=JSON.parse(t),r=[],o=e.genre_ids,i=!0,a=!1,l=void 0;try{for(var c,u=n[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var s=c.value;o.includes(s.id)&&r.push(s.name)}}catch(e){a=!0,l=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw l}}return 0===r.length?"Unknown genre":r.join(", ")}e(t.exports,"checkGenresById",(function(){return r})),e(t.exports,"checkGenresByIdModal",(function(){return o}))})),i.register("3qTkO",(function(e,n){var r,o=i("8nrFW"),a=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),l=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),c=matchMedia("(prefers-color-scheme: dark)"),u=document.querySelectorAll(".switcher__radio");function s(e){!function(e){var n,r;"auto"===e?(n="(prefers-color-scheme: light)",r="(prefers-color-scheme: dark)"):(n="light"===e?"all":"not all",r="dark"===e?"all":"not all");t(o)(a).forEach((function(e){e.media=n})),t(o)(l).forEach((function(e){e.media=r}))}(e),"auto"===e?localStorage.removeItem("color-scheme"):function(e){localStorage.setItem("color-scheme",e)}(e)}function d(){return localStorage.getItem("color-scheme")}null!==(r=d())&&(document.querySelector(".switcher__radio[value=".concat(r,"]")).checked=!0),t(o)(u).forEach((function(e){e.addEventListener("change",(function(e){s(e.target.value)}))})),function(){var e=d(),t=c.matches?"dark":"light";null!==e&&e!==t&&s(e)}()})),i.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||a.default(e)||o.default()};var n=l(i("kMC0W")),r=l(i("7AJDX")),o=l(i("8CtQK")),a=l(i("auk6i"));function l(e){return e&&e.__esModule?e:{default:e}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i("iE7OH").register(JSON.parse('{"6teei":"gallery.117e02c0.js","JQ8i3":"sprite.ca08d457.svg","aYzlh":"haker.f4ee20cb.jpg","bl282":"taras_bogun.269d280e.jpg","haOpi":"yulia.0cfe0448.jpg","4SkQd":"evgeniy.18e4e726.jpg","1qffy":"serhii.9abea59c.jpg","7EIXr":"shatohin.aaa96f92.jpg","8fHWd":"serhii_p.ce69810a.jpg","gOxud":"svetlana.47fe9927.jpg","4MTil":"andreiv.d0dc592d.jpg","cpRjw":"dima.2451f850.jpg"}'))}();
//# sourceMappingURL=gallery.117e02c0.js.map
