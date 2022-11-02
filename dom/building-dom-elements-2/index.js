export function finishList() {
  const list = document.querySelector('.list');
  const specialLi = document.querySelector('.special');

  const li1 = document.createElement('li');
  const li4 = document.createElement('li');
  const li6 = document.createElement('li');
  const li8 = document.createElement('li');

  li1.textContent = 1;
  li4.textContent = 4;
  li6.textContent = 6;
  li8.textContent = 8;
  
  list.prepend(li1);
  list.append(li8);

  specialLi.before(li4);
  specialLi.after(li6);
}