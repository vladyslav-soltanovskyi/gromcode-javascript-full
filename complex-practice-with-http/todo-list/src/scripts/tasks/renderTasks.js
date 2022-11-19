import { toggleDoneStatus } from "./toggleDoneStatus.js";
import { deleteTask } from "./deleteTask.js";

const list = document.querySelector('.list');

const createCheckbox = ({ done, id }) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  checkbox.dataset.taskId = id;

  checkbox.addEventListener('click', toggleDoneStatus);
  return checkbox;
}

const createDeleteBtn = (id) => {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('list-item__delete-btn');
  deleteBtn.dataset.taskId = id;

  deleteBtn.addEventListener('click', deleteTask);
  return deleteBtn;
}

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({ done, id });
  
  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  const textElem = document.createElement('span');
  textElem.textContent = text;
  textElem.classList.add('list-item__text');

  const deleteBtn = createDeleteBtn(id);

  listItemElem.append(checkboxElem, textElem, deleteBtn);

  return listItemElem;
}

export function renderTasks(tasksList) {
  const prevCheckboxes = list.querySelectorAll('.list__item-checkbox');
  prevCheckboxes.forEach(checkbox => checkbox.removeEventListener('click', toggleDoneStatus));
  list.innerHTML = '';

  const tasksElements = tasksList
    .sort((a, b) => a.done - b.done)
    .map(createListItem);

  list.append(...tasksElements);
};