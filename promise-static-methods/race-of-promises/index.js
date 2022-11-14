const random = (min, max) => Math.random() * (max - min) + min;

const fakeApi = (source) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userData: { name: 'Tom', age: 17 },
        source
      });
    }, random(1, 3));
  });
}

const getUserASAP = (userId) => (
  Promise.race([
    fakeApi(`https://server.com/us/${userId}`).then(response => response),
    fakeApi(`https://server.com/eu/${userId}`).then(response => response),
    fakeApi(`https://server.com/au/${userId}`).then(response => response)
  ])
)