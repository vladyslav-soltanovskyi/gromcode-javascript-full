'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  // put your code here
  let intervalId;
  let counter = count;
  const ping = () => {
    console.log('Ping');
    counter--;
    counter === 0 && clearInterval(intervalId);
  }
  ping();
  intervalId = setInterval(ping, period)
};
