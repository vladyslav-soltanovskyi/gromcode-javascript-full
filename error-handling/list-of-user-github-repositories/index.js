const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const nameFormInput = document.querySelector('.name-form__input');
const nameFormBtn = document.querySelector('.name-form__btn');
const repoListElem = document.querySelector('.repo-list');
const spinnerElem = document.querySelector('.spinner');
const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatar.src = defaultAvatar;

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json());
}

const fetchReposList = (repos_url) => {
  return fetch(repos_url)
    .then(res => res.json());
}

const generateReposList = (reposList) => (
  reposList.reduce((reposListText, { name }) => (
    reposListText + (
      `<li class="repo-list__item">${name}</li>`
    )
  ), '')
)

const renderUserData = ({ avatar_url, name, location}) => {
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = !location ? '' : `from ${location}`;
}

const onSearchUser = () => {
  const userName = nameFormInput.value;
  
  spinnerElem.classList.remove('spinner_hidden');
  repoListElem.innerHTML = '';

  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData)
      return userData.repos_url;
    })
    .then(reposUrl => fetchReposList(reposUrl))
    .then(reposList => {
      repoListElem.innerHTML = generateReposList(reposList);
    })
    .catch(() => alert('Failed to load data'))
    .finally(() => {
      spinnerElem.classList.add('spinner_hidden');
    });
}

nameFormBtn.addEventListener('click', onSearchUser);