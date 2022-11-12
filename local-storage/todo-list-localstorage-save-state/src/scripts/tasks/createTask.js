import { setTasksList, getTasksList } from "../common/storage.js";
import { renderTasks } from "./renderTasks.js";

export const createTask = (value) => {
  if (!value) {
    return;
  }
  const task = { id: Date.now(), text: value, done: false };
  
  const tasksList = getTasksList();

  tasksList.unshift(task);
  
  setTasksList(tasksList);

  renderTasks(tasksList);
}