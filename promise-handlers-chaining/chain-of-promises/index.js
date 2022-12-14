export const asyncCalculator = (numbr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);  
      resolve(numbr)
    }, 500);
  })
  .then(value => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Squared value: ${value**2}`);  
        resolve(value**2)
      }, 500);
    })
  })
  .then(value => {
    console.log(`Doubled value: ${value * 2}`);
    return value * 2;
  })
}