'use strict';

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const list = document.querySelector('.list');
const formActions = document.querySelector('.actions');

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const tasksListTemplate = tasksList
      .sort((a, b) => a.done - b.done)
      .reduce((template, { text, done, id }) => template + (
        `<li class="${done ? 'list__item list__item_done' : 'list__item' }">
          <input type="checkbox" class="list__item-checkbox" data-task-id="${id}" ${done ? 'checked' : ''} />
          ${text}
        </li>`
      ), '');

  list.innerHTML = tasksListTemplate;
};

const toggleDoneStatus = ({ target }) => {
  if (!target.dataset.taskId) {
    return;
  }
  const { taskId } = target.dataset;
  const indexTask = tasks.findIndex((task) => task.id === +taskId);

  const changedTask = { ...tasks[indexTask], done: !tasks[indexTask].done };
  
  tasks.splice(indexTask, 1, changedTask);
  renderTasks(tasks);
}

const createTask = (e) => {
  e.preventDefault();
  const task = { id: Date.now(), text: e.target.text.value, done: false };
  
  tasks.push(task);
  e.target.reset();

  renderTasks(tasks);
}

renderTasks(tasks);

formActions.addEventListener('submit', createTask);
list.addEventListener('change', toggleDoneStatus);