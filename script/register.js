const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordRep = document.getElementById("password__rep");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const submitMsg = document.querySelector(".form__submit__status");

  if (
    username.classList.contains("valid") &&
    email.classList.contains("valid") &&
    password.classList.contains("valid") &&
    passwordRep.classList.contains("valid")
  ) {
    localStorage.setItem("username", formData.get("username"));
    localStorage.setItem("email", formData.get("email"));
    localStorage.setItem("password", formData.get("password"));
    localStorage.setItem("password__rep", formData.get("password__rep"));
    console.log(localStorage);
    submitMsg.style.display = "flex";

    setTimeout(() => {
      window.location = "./index.html";
    }, 2000);
  } else alert("Проверьте свои данные");
});

const showPassword = document.getElementById("eye");
const showPasswordRepeat = document.getElementById("eye2");

showPassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

showPasswordRepeat.addEventListener("click", () => {
  if (passwordRep.type === "password") {
    passwordRep.type = "text";
  } else {
    passwordRep.type = "password";
  }
});

const formTitle = document.querySelector(".form__title");
const fButton = document.querySelector(".fb-login-button");
const eyeOuter = document.querySelectorAll(".eyeouter");
const formLabels = document.querySelectorAll(".form__input__label");
const inputs = document.querySelectorAll(".form__input");
const submitBtn = document.querySelector(".submit");
const container = document.querySelector(".container");

container.style.opacity = 1;

formTitle.classList.add("show");

setTimeout(() => {
  formLabels.forEach((label) => label.classList.add("show"));
}, 300);

setTimeout(() => {
  inputs.forEach((input) => input.classList.add("show"));
  eyeOuter.forEach((eye) => eye.classList.add("show"));
  fButton.classList.add("show");
  submitBtn.classList.add("show");
}, 600);

inputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    const target = e.target;
    const checkPass = document.querySelector(".check__password");

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
      if (
        fLen >= 2 &&
        sLen >= 2 &&
        tLen >= 2 &&
        !/\d/.test(secondPart) &&
        !/\d/.test(thirdPart)
      ) {
        target.classList.add("valid");
        target.classList.remove("invalid");
      } else {
        return;
      }
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }

    if (target.name === "password") {
      if (target.value.length >= 5) {
        target.classList.add("valid");
        target.classList.remove("invalid");
      } else {
        target.classList.add("invalid");
        target.classList.remove("valid");
      }
    } else if (target.name === "password__rep") {
      if (target.value != password.value) {
        checkPass.style.display = "flex";
      } else if (target.value.length >= 5) {
        target.classList.add("valid");
        target.classList.remove("invalid");
        checkPass.style.display = "none";
      } else {
        checkPass.style.display = "none";
        target.classList.add("invalid");
        target.classList.remove("valid");
      }
    } else if (target.name === "username") {
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
