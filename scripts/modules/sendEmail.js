import { inputName, inputEmail, inputPhone, textarea } from "./validator.js";

const form = document.getElementById("contact-form");

function sendEmail() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "contact_form", this).then(
      () => {
        console.log("SUCCESS!");
        inputName.value = "";
        inputEmail.value = "";
        inputPhone.value = "";
        textarea.value = "";
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  });
}

export { sendEmail };
