const slogansEl = document.querySelector(".slogans__list");

//НАБОР СЛОГАНОВ
export const slogansArr = [
  // НАБОР 1
  [
    "Решение вашей задачи под ключ и сопровождение",
    "Выдача заключения специалиста и эксперта",
    "Экспертная и независимая оценка",
  ],
  //НАБОР 2
  [
    "Судебная экспертиза",
    "Решение спорных вопросов по качеству, составу и основным параметрам товара",
    "Анализ качества продукции",
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
