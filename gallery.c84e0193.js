function e(e,n,i,t){Object.defineProperty(e,n,{get:i,set:t,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=i.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},i.parcelRequired7c6=r),r.register("kyEFX",(function(n,i){var t,o;e(n.exports,"register",(function(){return t}),(function(e){return t=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};t=function(e){for(var n=Object.keys(e),i=0;i<n.length;i++)r[n[i]]=e[n[i]]},o=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r("kyEFX").register(JSON.parse('{"T57zD":"gallery.c84e0193.js","7kCeP":"sprite.5148430c.svg","8mxQD":"haker.f4ee20cb.jpg","hP01P":"taras_bogun.269d280e.jpg","9zuxn":"yulia.0cfe0448.jpg"}')),document.body.onload=function(){setTimeout((function(){let e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")}),500)};var a;a=new URL(r("kyEFX").resolve("7kCeP"),import.meta.url).toString();var s;s=new URL(r("kyEFX").resolve("8mxQD"),import.meta.url).toString();var l;l=new URL(r("kyEFX").resolve("hP01P"),import.meta.url).toString();var d;d=new URL(r("kyEFX").resolve("9zuxn"),import.meta.url).toString();const c=[{name:"Serhii Prokip",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(s),linkedin:"https://www.linkedin.com/in/serhii-prokip-422782250",github:"https://github.com/iTSerhii85"},{name:"Yulia Safonova",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(d),linkedin:"",github:"https://github.com/Yulia-Safonova-85"},{name:"Roman Korzun",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(s),linkedin:"https://www.linkedin.com/in/roman-korzun-703b23262/",github:"https://github.com/romancarpangler"},{name:"Taras Bohun",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(l),linkedin:"https://www.linkedin.com/in/taras-bohun-94ab28262/",github:"https://github.com/TarasBohun"},{name:"Svitlana",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(s),linkedin:"",github:""},{name:"Evgeniy",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(s),linkedin:"",github:""}],u=document.querySelector(".js-footer-modal");document.querySelector(".footer-open-modal_link").addEventListener("click",(function(){u.innerHTML=m;document.querySelector(".footer-modal-close-button").addEventListener("click",f)}));const m=`\n<div class="footer-modal-backdrop">\n  <div class="footer-modal">\n    <button type="button" class="footer-modal-close-button">\n    X\n    </button>\n    <h2 class="our-team">Our team</h2>\n   ${c.map((e=>`\n<div class="developer">\n<div class="flip-card">\n  <div class="flip-card-inner">\n    <div class="flip-card-front">\n      <img src="${e.img}" alt="Developer ${e.name}" class="dev_photo" loading="lazy">\n    </div>\n    <div class="flip-card-back">\n      <a href="${e.linkedin}" class="icon-github">\n        <svg width="50" height="50">\n          <use href="${n(a)}#icon-github"></use>\n        </svg>\n      </a>\n      <a href="${e.linkedin}" class="icon-linkedin">\n        <svg width="50" height="50">\n          <use href="${n(a)}#icon-linkedin"></use>\n        </svg>\n      </a>\n    </div>\n</div>\n</div>\n  <div class="border">\n    <div class="about">\n     <h4 class="dev-name">${e.name}</h4>\n      <p class="about-dev">${e.text}</p>\n    </div>\n  </div>\n</div>`)).join("")}\n  </div>\n</div>`;function f(){u.innerHTML=""}
//# sourceMappingURL=gallery.c84e0193.js.map
