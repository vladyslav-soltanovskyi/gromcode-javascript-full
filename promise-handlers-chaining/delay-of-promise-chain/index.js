export const dalay = (period) => {
  return new Promise((resolve) => {
    setTimeout(resolve, period);
  })
}