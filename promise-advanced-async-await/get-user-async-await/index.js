'use strict';

export const fetchUser = async (userId) => {
  try {
    const res = await fetch(`https://api.github.com/users/${userId}`);

    if (!res.ok) {
        return null;
    }

    return (await res.json());
  } catch(err) {
    throw new Error('Failed to get user data');
  }
};
