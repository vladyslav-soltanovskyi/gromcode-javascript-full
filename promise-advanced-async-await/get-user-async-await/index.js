'use strict';

export const fetchUser = async (userId) => {
  try {
    const res = await fetch(`https://api.github.com/users/${userId}`);

    if (res.status === 404) {
        return null;
    }

    if (!res.ok) {
        throw new Error('Failed to get user data');
    }

    return (await res.json());
  } catch(err) {
    console.log(err.message);
  }
};
