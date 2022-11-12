export const getLocalStorageData = () => (
  Object.entries(localStorage)
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: JSON.parse(value)
    }))
)