const singleUseBtn = document.querySelector('.single-use-btn');
let isClicked = false

singleUseBtn.addEventListener('click', () => {
  isClicked && console.log('clicked');
  isClicked = true;
});