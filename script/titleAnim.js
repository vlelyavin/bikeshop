const pageTitle = document.querySelector(".page__title");
window.onload = () => {
  pageTitle.style.top = `5vh`;
  pageTitle.style.opacity = `1`;
};

window.addEventListener("scroll", () => {
  pageTitle.style.transform = `translateY(-${window.pageYOffset / 3}px)`;
  pageTitle.style.opacity = 1 - window.pageYOffset / 300;
});
