const form = document.querySelector('.login-form');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const formEl = event.target.elements;

  const email = formEl.email.value;

  const password = formEl.password.value;

  const formData = {
    email,
    password,
  };

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
  }

  form.reset();
}
