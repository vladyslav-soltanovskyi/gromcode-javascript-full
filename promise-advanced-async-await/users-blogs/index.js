'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

export const getUsersBlogs = async users => {
  try {
    const usersData = await Promise.all(users.map(user => (
      fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
    )));
  
    return usersData.map(({ blog }) => blog);
  } catch (err) {
    throw new Error(err.message);
  }
};
