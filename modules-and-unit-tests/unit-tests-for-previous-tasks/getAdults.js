export const getAdults = obj => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, age]) => age >= 18)
  )
};