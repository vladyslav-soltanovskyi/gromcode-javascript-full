const eventsList = document.querySelector('.events-list');
const rects = document.querySelectorAll('.rect');

const clearBtn = document.querySelector('.clear-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

const capturingHandler = (e) => {
  const eventsItem = document.createElement('span');
  eventsItem.textContent = e.currentTarget.tagName.toLowerCase();
  eventsItem.style.cssText = `color: grey; margin-left: 8px;`;
  eventsList.append(eventsItem);
}

const bubblingHandler = (e) => {
  const eventsItem = document.createElement('span');
  eventsItem.textContent = e.currentTarget.tagName.toLowerCase();
  eventsItem.style.cssText = `color: green; margin-left: 8px;`;
  eventsList.append(eventsItem);
}

const clearList = () => {
  eventsList.innerHTML = '';
}

const attachHandlers = () => {
  rects.forEach(rect => {
    rect.addEventListener('click', capturingHandler, true);
    rect.addEventListener('click', bubblingHandler, false);
  });
}

const removeHandlers = () => {
  rects.forEach(rect => {
    rect.removeEventListener('click', capturingHandler, true);
    rect.removeEventListener('click', bubblingHandler, false);
  });
}

attachHandlers();

removeHandlersBtn.addEventListener('click', removeHandlers);
attachHandlersBtn.addEventListener('click', attachHandlers);
clearBtn.addEventListener('click', clearList);
