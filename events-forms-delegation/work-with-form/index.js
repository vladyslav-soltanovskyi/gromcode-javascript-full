const loginForm = document.querySelector('.login-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorFields = document.querySelectorAll('.error-text');

const validateFields = ({ email, password }) => {
  let errors = {};

  if (email === '') {
    errors.email = 'Required';
  } else if (!email.includes('@')) {
    errors.email = 'Should be an email';
  }

  if (password === '') {
    errors.password = 'Required';
  }

  return errors;
}

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target));
  const errors = validateFields(formData);

  if (!Object.keys(errors).length) {
    alert(JSON.stringify(formData))
  }
}

const setErrors = () => {
  const errors = validateFields({ email: email.value, password: password.value });
  errorFields.forEach(field => field.textContent = '');
  Object.entries(errors).forEach(([name, textError]) => {
    const fieldError = document.querySelector(`#${name}`).nextElementSibling;
    fieldError.textContent = textError;
  })
}

email.addEventListener('input', setErrors);
password.addEventListener('input', setErrors);
loginForm.addEventListener('submit', handleSubmit)