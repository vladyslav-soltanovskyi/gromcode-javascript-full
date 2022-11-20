const baseUrl = 'https://5e5af5eb37d2eh00167913f52.mockapi.io/api/v1/users';

const request = (url, { method = 'GET', body = {}, ...rest } = {}) => {
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

export function getUsersList() {
  return request('');
}

export function getUserById(userId) {
  return request(`/${userId}`);
}

export function createUser(userData) {
  return request('', { method: "POST", body: userData });
}

export function deleteUser(userId) {
  return request(`/${userId}`, { method: "DELETE" });
}

export function updateUser(userId, userData) {
  return request(`/${userId}`, { method: "PUT", body: userData });
}