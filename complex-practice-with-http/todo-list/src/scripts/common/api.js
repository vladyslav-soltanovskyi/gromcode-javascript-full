const baseUrl = 'https://61d8e2cfe6744d0017ba8cdc.mockapi.io/';

const request = (url, { method = 'GET', body = {}, ...rest }) => {
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    ...rest.headers
  };

  const options = (method === 'GET') ? (
  { method, ...rest, headers }
  ) : (
  { method, body: JSON.stringify(body), ...rest, headers }
  )

  return fetch(`${baseUrl}${url}`, options)
    .then(res => res.json());
}

const getTasks = () => request('tasks', { method: "GET" });

const createTask = (taskData) => request('tasks', { method: "POST", body: taskData });

const deleteTask = (taskId) => request(`tasks/${taskId}`, { method: "DELETE" });

const updateTask = (taskId, taskData) => request(`tasks/${taskId}`, { method: "PUT", body: taskData });

export default {
  getTasks,
  createTask,
  deleteTask,
  updateTask
}
