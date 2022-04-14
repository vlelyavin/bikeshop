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

mainTitleFirst.classList.add("titlereveal");
intro.style.height = `${window.innerHeight * 4.5}px`;

setTimeout(() => {
  mainTitleSecond.classList.add("titlereveal");
}, 700);

setTimeout(() => {
  mainTitleThird.classList.add("titlereveal");
}, 1400);

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
        if (entry.target.classList.contains("product__column")) {
          entry.target.classList.add("show");
        } else if (entry.target.classList.contains("top__brands")) {
          entry.target.classList.add("reveal");
        }
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

const container = document.querySelector(".main__intro__inner");
const container2 = document.querySelector(".main__intro__slider");
const image = document.querySelector(".main__intro__slider__item");

document.addEventListener("scroll", () => {
  const wScrollY = window.pageYOffset;

  container.style.transform = `translatey(-${wScrollY / 2}px)`;

  if (wScrollY <= 1500) {
    const size = 175 - window.pageYOffset / 20;
    image.style.transform = `scale(${75 + window.scrollY / 50}%)`;
    image.style.width = `${size}%`;
    image.style.height = `${size}%`;
  }

  if (wScrollY > 1500) {
    container2.style.transform = `translatey(-${(wScrollY - 2000) / 1.5}px)`;
  }
});
