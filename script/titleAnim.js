const pageTitle = document.querySelector(".page__title");

pageTitle.style.top = `5vh`;
pageTitle.style.opacity = `1`;

setTimeout(() => {
  pageTitle.style.transition = `top 1s cubic-bezier(0, 0.93, 0.45, 0.99)`;
}, 300);

window.addEventListener("scroll", () => {
  pageTitle.style.transform = `translateY(-${window.pageYOffset / 3}px)`;
  pageTitle.style.opacity = 1 - window.pageYOffset / 300;
});
