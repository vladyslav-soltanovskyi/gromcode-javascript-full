import storage from '../common/storage.js';
import api from '../common/api.js';
import { createTask } from './createTask.js';
import { renderTasks } from './renderTasks.js';

const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const onCreateTask = () => {
  createTask(taskInput.value);
  taskInput.value = '';
};

export const initTasks = () => {
  api.getTasks().then(tasksList => {
    storage.setTasks(tasksList);
    renderTasks(tasksList);
  })
  createTaskBtn.addEventListener('click', onCreateTask);
}