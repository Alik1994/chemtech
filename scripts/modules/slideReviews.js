//Массив с отзывами
const reviewsArr = document.querySelectorAll(".section-reviews__gradient");

//Слайдер-трэк
const sliderTrack = document.querySelector(".slider__track");

//Видимая часть слайдера
const sliderWindow = document.querySelector(".slider");

//Контейнер с метками (круглешки)
const marks = document.querySelector(".slider__marks");

function slideReviews() {
  //ПЕРЕМЕННЫЕ
  //Ширина экрана
  let width = window.innerWidth;

  //Количество меток
  let numOfMarks = 0;

  //Шаг прокрутки
  let step = 0;

  //1. Проверка ширины экрана

  if (width < 1600 && width >= 1100) {
    numOfMarks = 6;
    step = 1;
    //Увеличить размер видимой части
    sliderWindow.style.maxWidth = "1045px";
  } else if (width < 1100) {
    numOfMarks = 3;
    step = 3;
    //Уменьшить размер видимой части
    sliderWindow.style.maxWidth = "780px";
  }

  //2. Создаем метки
  createMarks(numOfMarks);

  //3. Прокрутка (событие вешаем на метки)
  const marksEl = document.querySelectorAll(".slider__mark");

  for (let i = 0; i < marksEl.length; i++) {
    marksEl[i].addEventListener("click", marksHandler);
  }

  //Функция обработчик
  function marksHandler(event) {
    //Текущая метка
    let target = event.target;

    changeReview(target, sliderTrack, step);
  }
}

//Функция создания меток
function createMarks(num) {
  //1. Очищаем контейнер от имеющихся меток
  marks.innerHTML = "";

  //2. Создаем новые метки
  for (let i = 1; i <= num; i++) {
    const mark = document.createElement("input");
    mark.type = "radio";
    mark.name = "slider-mark";

    mark.classList.add("slider__mark");

    //Задаем специальный класс для последней метки
    if (i === num) {
      mark.dataset.last = `${true}`;
    }

    mark.dataset.markIndx = `${i}`;

    //Делаем первую метку активной
    if (i === 1) {
      mark.setAttribute("checked", "");
    }

    marks.append(mark);
  }
}

//Функция смены карточек
function changeReview(el, elContainer, step) {
  //1. Вычисляем индекс метки
  let nextIndx = Number(el.dataset.markIndx) - 1;

  //2. Вычислить значение прокрутки
  let scrollValue = (250 + 15) * nextIndx * step;

  //2.2 Прокрутить
  elContainer.style.marginLeft = `-${scrollValue}px`;
}

export { slideReviews };
