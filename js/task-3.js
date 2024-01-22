const textinput = document.querySelector('#name-input');

const textOutput = document.querySelector('#name-output');

textinput.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    textOutput.textContent = 'Anonymous';
  } else {
    textOutput.textContent = event.currentTarget.value.trim();
  }
});
