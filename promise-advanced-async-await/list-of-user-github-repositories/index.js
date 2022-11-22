const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const nameFormInput = document.querySelector('.name-form__input');
const nameFormBtn = document.querySelector('.name-form__btn');
const repoListElem = document.querySelector('.repo-list');
const spinnerElem = document.querySelector('.spinner');
const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatar.src = defaultAvatar;

const fetchUserData = async (userName) => {
  const res = fetch(`https://api.github.com/users/${userName}`);
  return (await res).json();
}

const fetchReposList = async (reposUrl) => {
  const res = fetch(reposUrl);
  return (await res).json();
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

const onSearchUser = async () => {
  const userName = nameFormInput.value;
  
  spinnerElem.classList.remove('spinner_hidden');
  repoListElem.innerHTML = '';

  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);

    const reposList = await fetchReposList(userData.repos_url);
    repoListElem.innerHTML = generateReposList(reposList);
  
  } catch (_) {
    alert('Failed to load data');
  } finally {
    spinnerElem.classList.add('spinner_hidden');
  }
}

nameFormBtn.addEventListener('click', onSearchUser);