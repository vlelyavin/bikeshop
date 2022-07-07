const pageTitle = document.querySelector(".page__title");
window.addEventListener("scroll", () => {
  pageTitle.style.transform = `translateY(-${window.pageYOffset / 3}px)`;
  pageTitle.style.opacity = 1 - window.pageYOffset / 300;
});
