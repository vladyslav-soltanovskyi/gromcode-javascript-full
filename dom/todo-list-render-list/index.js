'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const list = document.querySelector('.list');

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const tasksListTemplate = tasksList.reduce((template, { text, done }) => template + (
    `<li class="${done ? 'list__item list__item_done' : 'list__item' }">
        <input type="checkbox" class="list__item-checkbox" />
        ${text}
      </li>`
  ), '');

  list.innerHTML = tasksListTemplate;
};

renderTasks(tasks);