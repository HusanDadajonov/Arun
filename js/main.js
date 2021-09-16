let elDark = document.querySelector(".sun-btn");
let body = document.querySelector('body');

elDark.addEventListener("click", function() {
   body.classList.toggle("change-color");
});