export const getDiff = (startDate, endDate) => {
  const startTime = Date.parse(startDate);
  const endTime = Date.parse(endDate);
  const diffTime = startTime > endTime ? startTime - endTime : endTime - startTime;

  const seconds = Math.floor((diffTime / 1000) % 60);  
  const minutes = Math.floor((diffTime / (1000 * 60)) % 60);  
  const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);  
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}