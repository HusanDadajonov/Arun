let elDark = document.querySelector(".sun-btn");
let body = document.querySelector('body');
let elSwitch =document.querySelector(".switch-img");
let elMainswitch = document.querySelector(".header-switch");
let elcheck = document.querySelector(".check");
let elheader = document.querySelector("header");
elcheck .addEventListener("click", function() {
   elheader.classList.toggle("fixed-header");
})
elSwitch.addEventListener("click", function() {
   elMainswitch.classList.toggle("cahnge-switch");
})
elDark.addEventListener("click", function() {
   body.classList.toggle("change-color");
});