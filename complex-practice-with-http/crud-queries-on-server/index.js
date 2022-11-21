const baseUrl = 'https://61d8e2cfe6744d0017ba8cdc.mockapi.io/users';

const request = (url, options) => (
  fetch(`${baseUrl}${url}`, options)
    .then(res => res.json())
);

export const getUsersList = () => (
  fetch(`${baseUrl}`)
    .then(res => res.json())
);

export const getUserById = (userId) => (
  fetch(`${baseUrl}/${userId}`)
    .then(res => res.json())
)

export const createUser = (userData) => request('', {
  method: "POST",
  body: JSON.stringify(userData),
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});

export const deleteUser = (userId) => request(`/${userId}`, { method: "DELETE" });

export const updateUser = (userId, userData) => request(`/${userId}`, {
  method: "PUT",
  body: JSON.stringify(userData),
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});