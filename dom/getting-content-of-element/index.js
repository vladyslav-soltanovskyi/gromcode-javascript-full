export function getTitle() {
  const title = document.querySelector('.title');
  return title.textContent;
}

export function getDescription() {
  const title = document.querySelector('.about');
  return title.innerText;
}

export function getPlans() {
  const title = document.querySelector('.plans');
  return title.innerHTML;
}

export function getGoal() {
  const title = document.querySelector('.goal');
  return title.outerHTML;
}