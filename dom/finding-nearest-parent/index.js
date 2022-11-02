export function getSection(num) {
  const numberElem = document.querySelector(`[data-number="${num}"]`);
  
  return numberElem.closest('.box').dataset.section;
}