const burgerBtn = document.querySelector(".burger-menu");
const closeBtn = document.querySelector(".cross");
const subItems = document.querySelectorAll(".service-menu__wrapper");
const subMenu = document.querySelectorAll(".service-menu__submenu");
const arrows = document.querySelectorAll(".arrow");
const serviceMenuList = document.getElementById("serviceMenuList");

function showMenu() {
  let windowWidth = window.innerWidth;

  window.onresize = function () {
    closeBtn.classList.add("inactive");
  };

  if (windowWidth <= 550) {
    serviceMenuList.classList.add("inactive");
    burgerBtn.classList.remove("inactive");

    for (let arrow of arrows) {
      arrow.classList.remove("inactive");
    }

    for (let item of subItems) {
      item.addEventListener("click", arrowHandler);
    }

    burgerBtn.addEventListener("click", burgerHandler);
    closeBtn.addEventListener("click", closeHandler);

    serviceMenuList.classList.remove("service-menu__list");
    serviceMenuList.classList.add("burger-menu__list");
  } else if (windowWidth > 550) {
    serviceMenuList.classList.remove("inactive");
    burgerBtn.classList.add("inactive");
    serviceMenuList.classList.add("service-menu__list");
    serviceMenuList.classList.remove("burger-menu__list");
    closeBtn.classList.add("inactive");

    for (let arrow of arrows) {
      arrow.classList.add("inactive");
    }

    for (let item of subItems) {
      item.removeEventListener("click", arrowHandler);
    }
  }
}

function burgerHandler() {
  //1. Заменить бургер на крест
  burgerBtn.classList.add("inactive");
  closeBtn.classList.remove("inactive");

  serviceMenuList.classList.remove("inactive");
}

function closeHandler() {
  burgerBtn.classList.remove("inactive");
  closeBtn.classList.add("inactive");

  serviceMenuList.classList.add("inactive");

  for (let menu of subMenu) {
    menu.classList.remove("service-menu__submenu_active");
  }

  for (let arrow of arrows) {
    arrow.classList.remove("arrow__img_rotated");
  }
}

function arrowHandler(event) {
  let target = event.target.closest(".service-menu__wrapper");

  if (target) {
    target.children[1].classList.toggle("arrow__img_rotated");
    target.nextElementSibling.classList.toggle("service-menu__submenu_active");
  }
}

export { showMenu };
