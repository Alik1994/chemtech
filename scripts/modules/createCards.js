import { cardsData } from "./servicesData.js";

let selectedTag = document.querySelector(".section-services__tag_active");

const services = document.querySelector(".section-services__cards");

function tagsHandler(event) {
  let target = event.target.closest(".section-services__tag");

  if (target) {
    let numberOfCollection = Number(target.dataset.order);

    createCards(numberOfCollection);

    highlightTag(target);
  }
}

function createCards(order) {
  services.innerHTML = "";

  let collection = cardsData[order];

  for (let i = 0; i <= collection.length - 1; i++) {
    createCard(collection[i]);
  }
}

function createCard(data) {
  services.insertAdjacentHTML(
    "beforeend",
    `
    <div class="section-services__card">
  <div class="section-services__card-content">
    <div class="section-services__card-media">
      <img src="src/icons/services/${data.icon}" alt="Icon" class="section-services__card-img">
    </div>
    <div class="section-services__card-info">
      <h3 class="section-services__card-title">${data.title}</h3>
      <p class="section-services__card-description">${data.description}</p>
    </div>
  </div>
  <a href="${data.link}" class="section-services__card-link">Подробнее</a>
</div>
  `
  );
}

function highlightTag(tag) {
  if (selectedTag) {
    selectedTag.classList.remove("section-services__tag_active");
  }

  selectedTag = tag;
  selectedTag.classList.add("section-services__tag_active");
}

export { createCard, createCards, tagsHandler };
