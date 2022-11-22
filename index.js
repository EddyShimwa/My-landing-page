const hamburger = document.querySelector('.hamburger');
const crossIcon = document.querySelector('.Cross-Icon');
const menuItems = document.querySelector('.menu-items');

function navToggle() {
   menuItems.classList.toggle('df')
}

hamburger.addEventListener('click', navToggle) ;
crossIcon.addEventListener('click', navToggle);