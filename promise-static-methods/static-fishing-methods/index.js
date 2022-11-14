const getSum = (numbers) => numbers.reduce((total, num) => total + num, 0);  

export const asyncSum = (...asyncNumbers) => (
  Promise.all(asyncNumbers).then(numbers => getSum(numbers))
)