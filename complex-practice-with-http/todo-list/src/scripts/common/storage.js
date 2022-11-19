let tasks = [];

const getTasks = () => tasks;

const getTask = (taskId) => tasks.find(task => task.id === taskId);

const setTasks = (tasksList) => {
  tasks = tasksList;
};

const createTask = (taskData) => tasks.unshift(taskData);

const deleteTask = (taskId) => {
  tasks = tasks.filter(task => task.id !== taskId);
}

const updateTask = (taskId, taskData) => {
  tasks = tasks.map(task => task.id !== taskId ? task : { ...task, ...taskData });
}

export default {
  getTasks,
  getTask,
  setTasks,
  createTask,
  deleteTask,
  updateTask
}