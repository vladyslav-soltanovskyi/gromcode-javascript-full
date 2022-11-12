import { getTasksList } from '../common/storage.js';
import { createTask } from './createTask.js';
import { renderTasks } from './renderTasks.js';

const tasksList = getTasksList();

const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const onCreateTask = () => {
  createTask(taskInput.value);
  taskInput.value = '';
};

export const initTasks = () => {
  renderTasks(tasksList);
  createTaskBtn.addEventListener('click', onCreateTask);
}