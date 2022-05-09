const title = document.querySelector(".form__title");
const text = document.querySelector(".form__text");
const mapLocation = document.querySelector(".about__location");
const map = document.querySelector(".map");
const container = document.querySelector(".container");

title.classList.add("show");
setTimeout(() => {
  text.classList.add("show");
}, 200);

setTimeout(() => {
  mapLocation.classList.add("show");
}, 400);

setTimeout(() => {
  map.classList.add("show");
}, 600);

container.style.opacity = 1;
