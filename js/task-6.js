const input = document.querySelector('[type="number"]');

const createBtn = document.querySelector('[data-create]');

const destroyBtn = document.querySelector('[data-destroy]');

const mainContainer = document.querySelector('#boxes');

input.addEventListener('change', changeInputHandler);

let currentInputValue = 0;

function changeInputHandler(event) {
  const inputValue = event.target.value;
  currentInputValue = inputValue;
}

createBtn.addEventListener('click', createBtnHandler);

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(value) {
  let initialSize = 30;
  for (let i = 1; i <= value; i += 1) {
    const newColorBox = getRandomHexColor();
    const markup = `<div class="createdBox" style="background-color: ${newColorBox}; width: ${initialSize}px; height: ${initialSize}px;"></div>`;
    mainContainer.insertAdjacentHTML('afterbegin', markup);
    initialSize += 10;
  }
}

function createBtnHandler() {
  mainContainer.innerHTML = '';
  if (currentInputValue > 0 && currentInputValue <= 100) {
    console.log(currentInputValue);
    createBoxes(currentInputValue);
  } else {
    alert('Value should be in the range between 1 to 100!');
  }
  input.value = '';
  currentInputValue = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  input.value = '';
  currentInputValue = 0;
  mainContainer.innerHTML = '';
}
