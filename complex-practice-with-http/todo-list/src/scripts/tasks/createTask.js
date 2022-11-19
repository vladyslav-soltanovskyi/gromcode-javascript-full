import api from '../common/api.js';
import storage from '../common/storage.js';
import { renderTasks } from "./renderTasks.js";

export const createTask = (value) => {
  if (!value) {
    return;
  }

  api.createTask({ text: value })
    .then(task => {
      storage.createTask(task);
      const tasksList = storage.getTasks();
      renderTasks(tasksList);
    })
}