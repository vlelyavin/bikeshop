const mainTitleFirst = document.querySelector(".main__title__first");
const mainTitleSecond = document.querySelector(".main__title__second");
const mainTitleThird = document.querySelector(".main__title__third");
const intro = document.querySelector(".main__intro");
const search = document.getElementById("autoComplete");
const searchIcon = document.querySelector(".search__icon");
const searchLine = document.querySelector(".search__line");
const slowScroll = document.querySelector(".slowscroll");
const topbrands = document.querySelectorAll(".top__brands");
const cards = document.querySelectorAll(".product__column");
const slider = document.querySelector(".slider");
const sliderNav = document.querySelector(".slider__nav");
const sliderNavButtons = document.querySelectorAll(".slider__nav__button");
const mainArrow = document.querySelector(".main__arrow");

mainTitleFirst.classList.add("titlereveal");

setTimeout(() => {
  mainTitleSecond.classList.add("titlereveal");
}, 500);

setTimeout(() => {
  mainTitleThird.classList.add("titlereveal");
}, 1000);

setTimeout(() => {
  mainArrow.classList.add("arrow");
}, 1500);

const options = {
  block: "center",
  behavior: "smooth",
};

search.addEventListener("keyup", (e) => {
  const searchValue = search.value.toLowerCase().split(" ").join("");
  if (e.code === "Enter") {
    document.getElementById(`${searchValue}`).scrollIntoView(options);
  }
});

searchIcon.addEventListener("click", () => {
  searchLine.classList.toggle("active");
  clear.classList.toggle("rotate");
});

clear.addEventListener("click", () => {
  input.value = "";
});

slowScroll.addEventListener("click", (e) => {
  e.preventDefault();
  const bikes = document.getElementById("trekbikes");
  bikes.scrollIntoView(options);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0,
  }
);

const transformIntro = () => {
  intro.style.transform = `translateY(${window.scrollY / 2}px) translateX(${window.scrollY / 5}px)`;
};

window.addEventListener("scroll", transformIntro);

sliderNavButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    sliderNavButtons.forEach((button) => (button.style.background = "transparent"));
    e.target.style.background = "var(--white)";
  })
);

const resizeObserver = new ResizeObserver((entries) =>
  entries.forEach((entry) => {
    if (entry.contentRect.width < 1000) {
      window.removeEventListener("scroll", transformIntro);
      topbrands.forEach((topbrand) => observer.unobserve(topbrand));
      cards.forEach((card) => observer.unobserve(card));
    } else if (entry.contentRect.width < 1000) {
      menu.classList.remove("flip");
      sidemenu.classList.remove("showmenu");
    } else {
      window.addEventListener("scroll", transformIntro);
      topbrands.forEach((topbrand) => observer.observe(topbrand));
      cards.forEach((card) => observer.observe(card));
      topbrands.forEach((topbrand) => (topbrand.style.opacity = 0));
      cards.forEach((card) => (card.style.opacity = 0));
    }
  })
);

resizeObserver.observe(document.body);
