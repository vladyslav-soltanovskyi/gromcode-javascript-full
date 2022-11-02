export function squaredNumbers() {
  const numbers = document.querySelectorAll('.number');

  numbers.forEach(numberElem => {
    const { number } = numberElem.dataset;
    numberElem.dataset.squaredNumber = (+number)**2;
  })
}