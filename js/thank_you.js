const mainContent = document.getElementById('main-content');
const navInput = document.getElementById('nav-mobile-input');

navInput.onclick = function(){
    mainContent.classList.toggle("slide")
}