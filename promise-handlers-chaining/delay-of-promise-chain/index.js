export const asyncCalculator = (numbr) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  })
}