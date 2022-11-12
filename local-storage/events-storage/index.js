const buttons = document.querySelectorAll('.button');
const counterElem = document.querySelector('.counter');

const getItem = (key) => localStorage.getItem(key);

const setItem = (key, value) => localStorage.setItem(key, value);

let counter = +getItem('counter');

counterElem.textContent = counter;

const onCounterChange = (e) => {
  const { action } = e.target.dataset;

  switch (action) {
    case 'decrease': {
      setItem('counter', --counter);
      break;
    }
    case 'increase': {
      setItem('counter', ++counter);
      break;
    }
  }
  counterElem.textContent = counter;
}

buttons.forEach(button => button.addEventListener('click', onCounterChange));