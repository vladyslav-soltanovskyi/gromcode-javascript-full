export const getLocalStorageData = () => (
  Object.fromEntries(
    Object.entries(localStorage)
  )
)