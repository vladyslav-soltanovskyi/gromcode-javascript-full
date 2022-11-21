const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');
const submitButton = document.querySelector('.submit-button');

const baseUrl = 'https://61d8e2cfe6744d0017ba8cdc.mockapi.io/users';

const request = (url, options) => (
  fetch(`${baseUrl}${url}`, options)
    .then(res => res.json())
);

const createUser = (userData) => request('', {
  method: "POST",
  body: JSON.stringify(userData),
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});

const onInput = (e) => {
  submitButton.disabled = !form.reportValidity();
}

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form));
  createUser(formData)
    .then(user => {
      alert(JSON.stringify(user));
      form.reset();
    })
}

inputs.forEach(input => input.addEventListener('input', onInput));
form.addEventListener('submit', handleSubmit);