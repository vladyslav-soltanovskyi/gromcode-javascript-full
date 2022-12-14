const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const nameFormInput = document.querySelector('.name-form__input');
const nameFormBtn = document.querySelector('.name-form__btn');
const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatar.src = defaultAvatar;

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json());
}

const renderUserData = ({ avatar_url, name, location }) => {
  userAvatar.src = avatar_url;
  userName.textContent = name;
  userLocation.textContent = !location ? '' : `from ${location}`;
}

const onSearchUser = () => {
  const userName = nameFormInput.value;
  fetchUserData(userName)
    .then(userData => renderUserData(userData));
}

nameFormBtn.addEventListener('click', onSearchUser);