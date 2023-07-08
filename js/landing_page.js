const nav = document.getElementById('main-header');

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500) {
      nav.classList.add("active");
      scrollTop.classList.add("active");
    } else {
      nav.classList.remove("active");
      scrollTop.classList.remove("active");
    }
};

const scrollTop = document.getElementById('scrollTop');

scrollTop.onclick = function(){
    document.body.scrollTop;
}