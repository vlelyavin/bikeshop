const header = document.querySelector("header");
const clear = document.querySelector(".clear");
const input = document.getElementById("autoComplete");
const menu = document.querySelector(".menu__img");
const sidemenu = document.querySelector(".sidemenu");

header.classList.add("drop");

menu.addEventListener("click", () => {
  menu.classList.toggle("flip");
  sidemenu.classList.toggle("showmenu");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) {
    menu.classList.remove("flip");
    sidemenu.classList.remove("showmenu");
  }
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && sidemenu.classList.contains("showmenu")) {
    sidemenu.classList.remove("showmenu");
    menu.classList.remove("flip");
  } else;
});
