export const getGreenwichTime = (date) => (
  new Intl.DateTimeFormat('ua-UA', {
    hour: '2-digit',
    minute: '1-digit',
    hour12: false
  }).format(date)
)