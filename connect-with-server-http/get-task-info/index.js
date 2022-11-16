const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export function getTasksList() {
  // put your code here
  return fetch(`${baseUrl}`)
    .then(res => res.json());
}

export function getTaskById(taskId) {
  // put your code here
  return fetch(`${baseUrl}/${taskId}`)
    .then(res => res.json());
}