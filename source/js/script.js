let noJsClass = document.querySelector(".navbar");
noJsClass.classList.remove("navbar--no-js");
let mainNav = document.querySelector('.main-nav');
let toogleButton = document.querySelector('.navbar__toggle');
toogleButton.onclick = function () {
  mainNav.classList.toggle('main-nav--visible');
  toogleButton.classList.toggle('navbar__toggle--active');
};
