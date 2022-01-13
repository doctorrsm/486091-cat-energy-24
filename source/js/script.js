const noJsMap = document.querySelector(".contacts__map");
noJsMap.classList.remove("contacts__map--no-js");
const noJsClass = document.querySelector(".navbar");
noJsClass.classList.remove("navbar--no-js");
const mainNav = document.querySelector('.main-nav');
const toogleButton = document.querySelector(".navbar__toggle");
toogleButton.onclick = function () {
  mainNav.classList.toggle('main-nav--visible');
  toogleButton.classList.toggle('navbar__toggle--active');
};
