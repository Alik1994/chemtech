export const inputName = document.getElementById("name");
export const inputEmail = document.getElementById("email");
export const inputPhone = document.getElementById("cellphone");
export const textarea = document.getElementById("question");
export const submit = document.getElementById("submit");

function validateForm() {
  const regExpName = /^[а-яА-ЯёЁ]+$/g;
  const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  inputName.addEventListener("keyup", function () {
    if (!inputName.value.match(regExpName)) {
      inputName.classList.add("input_invalid");
    } else {
      inputName.classList.remove("input_invalid");
    }
  });

  inputName.addEventListener("blur", function () {
    if (!inputName.value.match(regExpName)) {
      inputName.classList.add("input_invalid");
    } else {
      inputName.classList.remove("input_invalid");
    }
  });

  inputName.addEventListener("focus", function () {
    inputName.classList.remove("input_invalid");
  });

  inputEmail.addEventListener("blur", function () {
    if (!inputEmail.value.match(regExpEmail)) {
      inputEmail.classList.add("input_invalid");
    } else {
      inputEmail.classList.remove("input_invalid");
    }
  });

  inputEmail.addEventListener("focus", function () {
    inputEmail.classList.remove("input_invalid");
  });

  inputPhone.addEventListener("keyup", function () {
    if (!inputPhone.value.match(regExpPhone)) {
      inputPhone.classList.add("input_invalid");
    } else {
      inputPhone.classList.remove("input_invalid");
    }
  });

  inputPhone.addEventListener("blur", function () {
    if (!inputPhone.value.match(regExpPhone)) {
      inputPhone.classList.add("input_invalid");
    } else {
      inputPhone.classList.remove("input_invalid");
    }
  });

  inputPhone.addEventListener("focus", function () {
    inputPhone.classList.remove("input_invalid");
  });
}

export { validateForm };
