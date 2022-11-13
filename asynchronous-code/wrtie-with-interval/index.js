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
    console.log("Ping");
    counter--;
    counter === 0 && clearInterval(intervalId);
  }
  ping();
  intervalId = setInterval(ping, period / (count - 1))
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
