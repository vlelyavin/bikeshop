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
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider__container");
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

// document.addEventListener("scroll", () => {
//   const windowScrollY = window.pageYOffset;
//   const windowHeight = window.innerHeight;
//   if (windowScrollY < windowHeight * 2) {
//     container.style.transform = `translatey(-${windowScrollY}px)`;
//   } else {
//     container.style.transform = `translatey(-${windowHeight * 2}px)`;
//   }

//   if (windowScrollY > window.innerHeight / 2) {
//     sliderImages.forEach((image) => {
//       image.style.width = `100%`;
//       image.style.height = `100%`;
//     });
//   } else {
//     sliderImages.forEach((image) => {
//       image.style.width = `130%`;
//       image.style.height = `130%`;
//     });
//   }

//   sliderNav.style.bottom = `${windowScrollY / 10}px`;

//   if (sliderNav.style.bottom.slice(0, -2) > 50) {
//     sliderNav.style.bottom = `50px`;
//   }

//   if (windowScrollY - windowHeight <= 100) {
//     slider.style.transition = `0.05s`;
//     slider.style.transform = `translatey(0)`;
//   } else {
//     slider.style.transition = ``;
//   }

//   if (windowScrollY > windowHeight) {
//     slider.style.transform = `translatey(-${windowScrollY - windowHeight}px)`;
//   }
// });

// const mainObserver = new IntersectionObserver((entries) =>
//   entries.forEach(
//     (entry) => {
//       if (entry.isIntersecting) {
//         console.log(entry.target);
//       } else {
//         console.log("not intersecting");
//       }
//     },
//     { threshold: 0.5 }
//   )
// );

// sliderImages.forEach((image) => {
//   mainObserver.observe(image);
// });

window.addEventListener("scroll", (e) => {
  intro.style.transform = `translateY(${window.scrollY / 2}px) translateX(${window.scrollY / 5}px)`;
});

sliderNavButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    sliderNavButtons.forEach((button) => (button.style.background = "transparent"));
    e.target.style.background = "#fff";
  })
);
