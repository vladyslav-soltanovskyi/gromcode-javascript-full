export const delay = (period) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), period);
  })
}