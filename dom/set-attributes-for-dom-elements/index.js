export function finishForm() {
  const form = document.querySelector('.login-form');
  const password = form.querySelector('input');
  const login = document.createElement('input');

  login.type = 'text';
  login.name = 'login';
  
  password.type = 'password';
  
  form.prepend(login);
}