import { slogansArr, showSlogans } from "./modules/showSlogan.js";
import { slideReviews } from "./modules/slideReviews.js";
import { showMenu } from "./modules/burgerMenu.js";

showSlogans(slogansArr);

//Cлайдер
window.addEventListener("resize", slideReviews);
window.addEventListener("load", slideReviews);
slideReviews();

//Бургер-меню
window.addEventListener("resize", showMenu);
window.addEventListener("load", showMenu);
showMenu();
