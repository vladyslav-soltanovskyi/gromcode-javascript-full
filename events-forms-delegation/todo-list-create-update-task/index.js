'use strict';

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const list = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const toggleDoneStatus = ({ target }) => {
  const { taskId } = target.dataset;
  const indexTask = tasks.findIndex((task) => task.id === +taskId);

  const changedTask = { ...tasks[indexTask], done: !tasks[indexTask].done };
  
  tasks.splice(indexTask, 1, changedTask);
  renderTasks(tasks);
}

const createTask = () => {
  if (!taskInput.value) {
    return;
  }
  const task = { id: Date.now(), text: taskInput.value, done: false };

  tasks.unshift(task);
  taskInput.value = '';

  renderTasks(tasks);
}

function renderTasks(tasksList) {
  const prevCheckboxes = list.querySelectorAll('.list__item-checkbox');
  prevCheckboxes.forEach(checkbox => checkbox.removeEventListener('click', toggleDoneStatus));

  const tasksElements = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      checkbox.addEventListener('click', toggleDoneStatus);
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  list.append(...tasksElements);
};

renderTasks(tasks);

createTaskBtn.addEventListener('click', createTask);