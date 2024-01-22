const bodyEl = document.querySelector('body');

const widget = document.querySelector('.widget');

const colorName = document.querySelector('.color');

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', changeBtnHandler);

function changeBtnHandler() {
  const newColor = getRandomHexColor();

  bodyEl.style.backgroundColor = newColor;

  colorName.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
