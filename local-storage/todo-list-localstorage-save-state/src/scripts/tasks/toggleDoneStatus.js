import { getTasksList, setTasksList } from "../common/storage.js";
import { renderTasks } from "./renderTasks.js";

export const toggleDoneStatus = ({ target }) => {
  const { taskId } = target.dataset;
  const tasksList = getTasksList();
  
  const indexTask = tasksList.findIndex((task) => task.id === +taskId);

  const changedTask = { ...tasksList[indexTask], done: !tasksList[indexTask].done };
  
  tasksList.splice(indexTask, 1, changedTask);
  setTasksList(tasksList);
  renderTasks(tasksList);
}