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

export const getUsersList = () => request('');

export const getUserById = (userId) => request(`/${userId}`);

export const createUser = (userData) => request('', { method: "POST", body: userData });

export const deleteUser = (userId) => request(`/${userId}`, { method: "DELETE" });

export const updateUser = (userId, userData) => request(`/${userId}`, { method: "PUT", body: userData });