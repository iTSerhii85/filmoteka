!function(){function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return i[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},t.parcelRequired7c6=r),r.register("iE7OH",(function(n,t){var i,o;e(n.exports,"register",(function(){return i}),(function(e){return i=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};i=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)r[n[t]]=e[n[t]]},o=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r.register("aNJCr",(function(n,t){var i;e(n.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var o={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),o[e]=n),n}})),r("iE7OH").register(JSON.parse('{"euV2r":"gallery.5692d331.js","JQ8i3":"sprite.5148430c.svg","aYzlh":"haker.f4ee20cb.jpg","bl282":"taras_bogun.269d280e.jpg"}')),document.body.onload=function(){setTimeout((function(){var e=document.getElementById("page-preloader");e.classList.contains("done")||e.classList.add("done")}),500)};var a;a=r("aNJCr").getBundleURL("euV2r")+r("iE7OH").resolve("JQ8i3");var c;c=r("aNJCr").getBundleURL("euV2r")+r("iE7OH").resolve("aYzlh");var s;s=r("aNJCr").getBundleURL("euV2r")+r("iE7OH").resolve("bl282");var l=[{name:"Serhii Prokip",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(c),linkedin:"https://www.linkedin.com/in/serhii-prokip-422782250",github:"https://github.com/iTSerhii85"},{name:"Yulia Safonova",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(c),linkedin:"",github:""},{name:"Roman Korzun",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(c),linkedin:"https://www.linkedin.com/in/roman-korzun-703b23262/",github:"https://github.com/romancarpangler"},{name:"Taras Bohun",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(s),linkedin:"https://www.linkedin.com/in/taras-bohun-94ab28262/",github:"https://github.com/TarasBohun"},{name:"Svitlana",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(c),linkedin:"",github:""},{name:"Evgeniy",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",img:n(c),linkedin:"",github:""}],u=document.querySelector(".js-footer-modal");document.querySelector(".footer-open-modal_link").addEventListener("click",(function(){u.innerHTML=f,document.querySelector(".footer-modal-close-button").addEventListener("click",m)}));var d=l.map((function(e){return'\n<div class="developer">\n<div class="flip-card">\n  <div class="flip-card-inner">\n    <div class="flip-card-front">\n      <img src="'.concat(e.img,'" alt="Developer ').concat(e.name,'" class="dev_photo" loading="lazy">\n    </div>\n    <div class="flip-card-back">\n      <a href="').concat(e.linkedin,'" class="icon-github">\n        <svg width="50" height="50">\n          <use href="').concat(n(a),'#icon-github"></use>\n        </svg>\n      </a>\n      <a href="').concat(e.linkedin,'" class="icon-linkedin">\n        <svg width="50" height="50">\n          <use href="').concat(n(a),'#icon-linkedin"></use>\n        </svg>\n      </a>\n    </div>\n</div>\n</div>\n  <div class="border">\n    <div class="about">\n     <h4 class="dev-name">').concat(e.name,'</h4>\n      <p class="about-dev">').concat(e.text,"</p>\n    </div>\n  </div>\n</div>")})).join(""),f='\n<div class="footer-modal-backdrop">\n  <div class="footer-modal">\n    <button type="button" class="footer-modal-close-button">\n    X\n    </button>\n    <h2 class="our-team">Our team</h2>\n   '.concat(d,"\n  </div>\n</div>");function m(){u.innerHTML=""}}();
//# sourceMappingURL=gallery.5692d331.js.map
