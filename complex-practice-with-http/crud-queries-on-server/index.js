const baseUrl = 'https://61d8e2cfe6744d0017ba8cdc.mockapi.io/users';

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

getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then(userData => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

updateUser('1', updatedUserData).then(() => {
  console.log('User updated');
});

deleteUser('2').then(() => {
  console.log('User updated');
});
