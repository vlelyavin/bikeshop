const mainTitleFirst = document.querySelector(".main__title__first");
const mainTitleSecond = document.querySelector(".main__title__second");
const mainTitleThird = document.querySelector(".main__title__third");
const introContainer = document.querySelector(".main__intro__inner");
const intro = document.querySelector(".main__intro");
const search = document.getElementById("autoComplete");
const searchIcon = document.querySelector(".search__icon");
const searchLine = document.querySelector(".search__line");
const slowScroll = document.querySelector(".slowscroll");
const topbrands = document.querySelectorAll(".top__brands");
const cards = document.querySelectorAll(".product__column");
const container = document.querySelector(".main__intro__inner");
const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider__image");
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

search.addEventListener("keyup", (e) => {
  const options = {
    block: "center",
    behavior: "smooth",
  };

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

  bikes.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
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

topbrands.forEach((topbrand) => {
  observer.observe(topbrand);
});

cards.forEach((card) => {
  observer.observe(card);
});

intro.style.height = `200vh`;

document.addEventListener("scroll", () => {
  const windowScrollY = window.pageYOffset;
  const windowHeight = window.innerHeight;

  container.style.transform = `translatey(-${windowScrollY}px)`;

  if (windowScrollY <= windowHeight) {
    const size = 175 - windowScrollY / 20;
    sliderImages.forEach((image) => {
      image.style.width = `${size}%`;
      image.style.height = `${size}%`;
    });
  }

  sliderNav.style.bottom = `${windowScrollY / 10}px`;
  if (sliderNav.style.bottom.slice(0, -2) > 50) {
    sliderNav.style.bottom = `50px`;
  }

  if (windowScrollY - windowHeight <= 50) {
    slider.style.transition = `0.05s`;
    slider.style.transform = `translatey(0)`;
  } else {
    slider.style.transition = ``;
  }

  if (windowScrollY > windowHeight) {
    slider.style.transform = `translatey(-${windowScrollY - windowHeight}px)`;
  }
});

sliderNavButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    sliderNavButtons.forEach((button) => (button.style.background = "transparent"));
    e.target.style.background = "#fff";
  })
);
