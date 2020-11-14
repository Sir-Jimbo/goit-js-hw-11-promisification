//Есть массив цветов в hex-формате

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//и кнопки Start и Stop

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

//Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let bodyColor = null;
let timerId = null;

//Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль.

startBtn.addEventListener("click", () => {

//Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.x    
if (startBtn.disabled) { return }
        startBtn.disabled = true;

    timerId = setInterval(() => {
        bodyColor = colors[randomIntegerFromInterval(0, colors.length - 1)];  
        document.body.style.background = bodyColor;
    console.log(bodyColor);
  }, 1000);
});

// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
stopBtn.addEventListener("click", () => {
    startBtn.disabled = false;
  clearInterval(timerId);
  console.log("setInterval stopped!");
});
