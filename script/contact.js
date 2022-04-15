const form = document.getElementById("form");
const greeting = document.querySelector(".form__title");
const descr = document.querySelector(".form__text");
const inputs = document.querySelectorAll("input");
const container = document.querySelector(".container");
const suptitles = document.querySelectorAll(".form__input__label");
const submitBtn = document.querySelector(".submit");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
const username = document.getElementById("username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const submitMsg = document.querySelector(".form__submit__status");

  if (
    username.classList.contains("valid") &&
    email.classList.contains("valid") &&
    textarea.classList.contains("valid")
  ) {
    localStorage.setItem("username", formData.get("username"));
    localStorage.setItem("email", formData.get("email"));
    localStorage.setItem("message", formData.get("textarea"));
    console.log(localStorage);
    submitMsg.style.display = "flex";
    setTimeout(() => {
      window.location = "../index.html";
    }, 2000);
  } else alert("Проверьте свои данные");
});

inputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    const target = e.target;

    if (
      target.name === "email" &&
      target.value.includes("@") &&
      target.value.includes(".") &&
      target.value.length <= 50
    ) {
      const field = target.value.split(/[@.]/);
      const firstPart = field[0];
      const secondPart = field[1];
      const thirdPart = field[2];
      const fLen = firstPart.length;
      const sLen = secondPart.length;
      const tLen = thirdPart.length;
      if (fLen >= 2 && sLen >= 2 && tLen >= 2 && !/\d/.test(secondPart) && !/\d/.test(thirdPart)) {
        target.classList.add("valid");
        target.classList.remove("invalid");
      } else {
        return;
      }
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }
    if (target.name === "username") {
      if (target.value.length >= 3) {
        target.classList.add("valid");
        target.classList.remove("invalid");
      } else {
        target.classList.add("invalid");
        target.classList.remove("valid");
      }
    }
  })
);

textarea.addEventListener("input", (e) => {
  const target = e.target;
  if (target.name === "textarea") {
    if (target.value.length >= 20) {
      target.classList.add("valid");
      target.classList.remove("invalid");
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }
  }
});

container.style.opacity = 1;

greeting.classList.add("show");
setTimeout(() => {
  descr.classList.add("show");
}, 300);

setTimeout(() => {
  suptitles.forEach((suptitle) => suptitle.classList.add("show"));
}, 600);

setTimeout(() => {
  inputs.forEach((input) => input.classList.add("show"));
  textarea.classList.add("show");
  submitBtn.classList.add("show");
}, 900);
