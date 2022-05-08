const mainTitle = document.querySelector(".main__title");
window.addEventListener("scroll", () => {
  mainTitle.style.transform = `translateY(-${window.pageYOffset / 3}px)`;
  mainTitle.style.opacity = 1 - window.pageYOffset / 300;
});
