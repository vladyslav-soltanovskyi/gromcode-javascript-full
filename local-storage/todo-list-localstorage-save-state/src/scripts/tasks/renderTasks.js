import { toggleDoneStatus } from "./toggleDoneStatus.js";

const list = document.querySelector('.list');

export function renderTasks(tasksList) {
  const prevCheckboxes = list.querySelectorAll('.list__item-checkbox');
  prevCheckboxes.forEach(checkbox => checkbox.removeEventListener('click', toggleDoneStatus));
  list.innerHTML = '';

  const tasksElements = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.taskId = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      checkbox.addEventListener('click', toggleDoneStatus);
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  list.append(...tasksElements);
};