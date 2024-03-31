import {
  inputName,
  inputEmail,
  inputPhone,
  textarea,
  submit,
} from "./validator.js";

const form = document.getElementById("contact-form");

function sendEmail() {
  form.addEventListener("submit", function (event) {
    inputName.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
    textarea.value = "";

    submit.classList.add("btn_disabled");

    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm("service_contact", "contact_form", this).then(
      () => {
        console.log("SUCCESS!");
        submit.classList.remove("btn_disabled");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  });
}

export { sendEmail };
