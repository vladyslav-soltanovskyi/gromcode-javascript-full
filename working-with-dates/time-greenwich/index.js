export const getGreenwichTime = (date) => {
  return new Intl.DateTimeFormat('ua-UA', { hour: 'numeric', minute: 'numeric' }).format(date); 
}