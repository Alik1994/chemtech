import { slogansArr, showSlogans } from "./modules/showSlogan.js";
import { slideReviews } from "./modules/slideReviews.js";
import { showMenu } from "./modules/burgerMenu.js";
import { createCards, tagsHandler } from "./modules/createCards.js";
import { validateForm, submit } from "./modules/validator.js";

const tags = document.querySelectorAll(".section-services__tag");

showSlogans(slogansArr);

//Cлайдер
window.addEventListener("resize", slideReviews);
window.addEventListener("load", slideReviews);
slideReviews();

//Бургер-меню
window.addEventListener("resize", showMenu);
window.addEventListener("load", showMenu);
showMenu();

//Карточки услуг

for (let tag of tags) {
  tag.addEventListener("click", tagsHandler);
}

createCards(0);

//Форма заявки
validateForm();
