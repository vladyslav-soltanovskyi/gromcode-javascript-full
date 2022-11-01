export function setButton(buttonText) {
  document.querySelector('body').innerHTML = buttonText;
}

setButton('<button>button text</button>');