const arena = document.querySelector('.arena');
const boardSelectedSeat = document.querySelector('.board__selected-seat');

const renderSectors = () => {
  let sectors = '';

  for (let sector = 1; sector <= 3; sector++) {
    sectors += '<div class="sector">';;
    for (let line = 1; line <= 10; line++) {
      sectors += '<div class="sector__line">';
      for (let seat = 1; seat <= 10; seat++) {
        sectors += `<div class="sector__seat" data-line="${line}" data-seat="${seat}" data-sector="${sector}"></div>`;
      }
      sectors += '</div>';
    }
    sectors += '</div>';
  }

  arena.innerHTML = sectors;
}

const selectSeat = ({ target }) => {
  if (!target.classList.contains('sector__seat')) {
    return;
  }
  const { line, seat, sector } = target.dataset;
  boardSelectedSeat.textContent = `S ${sector} - L ${line} - S ${seat}`;
}

renderSectors();

arena.addEventListener('click', selectSeat);