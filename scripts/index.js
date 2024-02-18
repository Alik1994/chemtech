import { slogansArr, showSlogans } from "./modules/showSlogan.js";
import { slideReviews } from "./modules/slideReviews.js";

showSlogans(slogansArr);

//Cлайдер
window.addEventListener("resize", slideReviews);
window.addEventListener("load", slideReviews);
slideReviews();
