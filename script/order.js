const checkbox = document.getElementById("check");
const checkLabel = document.querySelector(".checklabel");
const nam = document.getElementById("name");
const named = document.getElementById("named");
const email = document.getElementById("email");
const emaild = document.getElementById("emaild");
const address = document.getElementById("address");
const addressd = document.getElementById("addressd");
const city = document.getElementById("city");
const cityd = document.getElementById("cityd");
const phone = document.getElementById("phone");
const phoned = document.getElementById("phoned");
const zip = document.getElementById("zip");
const zipd = document.getElementById("zipd");
const state = document.getElementById("state");
const stated = document.getElementById("stated");
const select = document.getElementById("select");
const selectd = document.getElementById("selectd");
const submitBtn = document.querySelector(".submit");
const createAcc = document.querySelector(".account");
const textarea = document.getElementById("textarea");
const daySelect = document.getElementById("deliveryday");
const monthSelect = document.getElementById("deliverymonth");
const yearSelect = document.getElementById("deliveryyear");
const selectFields = document.querySelectorAll("select");
const inputFieds = document.querySelectorAll("input");
const orderHeaders = document.querySelectorAll(".order__header");
const iconContainer = document.querySelector(".icon__container");
const container = document.querySelector(".container");
const inputSuptitles = document.querySelectorAll(".input__suptitle");
const choiceHeader = document.querySelector(".bike__choice__header");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  localStorage.setItem("name", formData.get("nam"));
  localStorage.setItem("email", formData.get("email"));
  localStorage.setItem("address", formData.get("address"));
  localStorage.setItem("city", formData.get("city"));
  localStorage.setItem("phone", formData.get("phone"));
  localStorage.setItem("zip", formData.get("zip"));
  localStorage.setItem("state", formData.get("state"));
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

(function populateMonths() {
  for (i = 0; i < months.length; i++) {
    const option = document.createElement("option");
    option.textContent = months[i];
    monthSelect.appendChild(option);
  }
  monthSelect.value = "January";
})();

let previousDay;

const populateDays = (month) => {
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }
  let dayNum;
  let year = yearSelect.value;

  if (
    month === "Январь" ||
    month === "Март" ||
    month === "Май" ||
    month === "Июль" ||
    month === "Август" ||
    month === "Август" ||
    month === "Декабрь"
  ) {
    dayNum = 31;
  } else if (
    month === "Апрель" ||
    month === "Июнь" ||
    month === "Сентябрь" ||
    month === "Ноябрь"
  ) {
    dayNum = 30;
  } else {
    if (new Date(year, 1, 29).getMonth() === 1) {
      dayNum = 29;
    } else {
      dayNum = 28;
    }
  }

  for (i = 1; i <= dayNum; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    daySelect.appendChild(option);
  }
  if (previousDay) {
    daySelect.value = previousDay;
    if (daySelect.value) {
      daySelect.value = previousDay - 1;
    }
    if (daySelect.value) {
      daySelect.value = previousDay - 2;
    }
    if (daySelect.value) {
      daySelect.value = previousDay - 3;
    }
  }
};

const populateYears = () => {
  const year = new Date().getFullYear();

  for (i = 0; i < 5; i++) {
    const option = document.createElement("option");
    option.textContent = year + i;
    yearSelect.appendChild(option);
  }
};

populateDays(monthSelect.value);
populateYears();

yearSelect.addEventListener("change", () => {
  populateDays(monthSelect.value);
});

monthSelect.addEventListener("change", () => {
  populateDays(monthSelect.value);
});

daySelect.addEventListener("change", () => {
  previousDay = daySelect.value;
});

const ccnum = document.getElementById("ccnum");
ccnum.addEventListener("input", () => {
  let cardFormat = ccnum.value.split(" ").join("");
  if (cardFormat.length > 0) {
    cardFormat = cardFormat.match(new RegExp(".{1,4}", "g")).join(" ");
  }
  ccnum.value = cardFormat;
});

container.style.opacity = 1;
choiceHeader.classList.add("show");

orderHeaders.forEach((header) => header.classList.add("show"));
setTimeout(() => {
  inputSuptitles.forEach((suptitle) => suptitle.classList.add("show"));
}, 300);

setTimeout(() => {
  submitBtn.classList.add("show");
  iconContainer.classList.add("show");
  selectFields.forEach((field) => field.classList.add("show"));
  inputFieds.forEach((field) => field.classList.add("show"));
  createAcc.classList.add("show");
  textarea.classList.add("show");
  checkLabel.classList.add("show");
}, 600);

inputFieds.forEach((field) =>
  field.addEventListener("input", (e) => {
    const target = e.target;
    console.log(target.name);
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
    if (target.name === "nam") {
      if (target.value.length <= 4) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "address") {
      if (target.value.length <= 6) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "city") {
      if (target.value.length <= 2) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "phone") {
      if (target.value.length != 10) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "zip") {
      if (target.value.length != 5) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "cardname") {
      if (target.value.length <= 5) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "cardnumber") {
      if (target.value.length != 19) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "expmonth") {
      if (target.value.length <= 4) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "expyear") {
      if (target.value.length != 4) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "cvv") {
      if (target.value.length != 3) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "name") {
      if (target.value.length <= 4) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    } else if (target.name === "state") {
      if (target.value.length <= 2) {
        target.classList.add("invalid");
        target.classList.remove("valid");
      } else {
        target.classList.add("valid");
        target.classList.remove("invalid");
      }
    }
  })
);

checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    named.value = nam.value;
    emaild.value = email.value;
    addressd.value = address.value;
    cityd.value = city.value;
    phoned.value = phone.value;
    zipd.value = zip.value;
    stated.value = state.value;
    selectd.value = select.value;

    named.classList.add("valid");
    emaild.classList.add("valid");
    addressd.classList.add("valid");
    cityd.classList.add("valid");
    phoned.classList.add("valid");
    zipd.classList.add("valid");
    stated.classList.add("valid");
    selectd.classList.add("valid");
  } else {
    named.value = "";
    emaild.value = "";
    addressd.value = "";
    cityd.value = "";
    phoned.value = "";
    zipd.value = "";
    stated.value = "";
    selectd.value = "";

    named.classList.remove("valid");
    emaild.classList.remove("valid");
    addressd.classList.remove("valid");
    cityd.classList.remove("valid");
    phoned.classList.remove("valid");
    zipd.classList.remove("valid");
    stated.classList.remove("valid");
    selectd.classList.remove("valid");
  }
});
