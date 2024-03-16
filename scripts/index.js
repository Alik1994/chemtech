import { showMenu } from "./modules/burgerMenu.js";

//Бургер-меню
window.addEventListener("resize", showMenu);
window.addEventListener("load", showMenu);
showMenu();
