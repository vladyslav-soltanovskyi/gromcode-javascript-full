export const getTasksList = () => JSON.parse(localStorage.getItem('tasksList')) ?? [];

export const setTasksList = (tasksList) => localStorage.setItem('tasksList', JSON.stringify(tasksList));