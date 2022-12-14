export const getGreenwichTime = (date) => (
  new Intl.DateTimeFormat('ua-UA', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date)
)