const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let idInterval;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  idInterval = setInterval(changeBackgroundColor, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(idInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
});

function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
