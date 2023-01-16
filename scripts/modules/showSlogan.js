const slogansEl = document.querySelector(".slogans__list");

//НАБОР СЛОГАНОВ
export const slogansArr = [
  // НАБОР 1
  [
    "Решение вашей задачи под ключ и сопровождение",
    "Анализ качества продукции и выдача заключения специалиста и эксперта",
    "Решение спорныx вопросов по качеству, составу и показателям",
  ],
  //НАБОР 2
  [
    "Оценка экологической обстановки",
    "Проблемы экологии",
    "Экспертная и независимая оценка",
  ],
];

function showSlogans(arr) {
  let counter = 1;

  let interval = setInterval(() => {
    if (counter === arr.length) counter = 0;
    slogansEl.classList.toggle("active");
    setTimeout(changeSlogan, 700, arr[counter]);
    counter++;
  }, 4000);

  slogansEl.classList.toggle("active");
}

function changeSlogan(arr) {
  slogansEl.classList.toggle("active");
  //Очистить содержимое
  slogansEl.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    //Создать элемент
    const sloganText = document.createElement("p");

    //Наполнить содержимым
    sloganText.textContent = `${arr[i]}`;

    //Задать стиль
    sloganText.classList.add("slogans__text");

    //Вставить в элемент
    slogansEl.append(sloganText);
  }
}

export { showSlogans };
