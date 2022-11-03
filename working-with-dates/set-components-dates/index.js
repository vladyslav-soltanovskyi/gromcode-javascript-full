const arrDaysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']

const daysOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  const indexDayOfWeek = new Date(dateInFuture).getDay();
  
  return arrDaysOfWeek[indexDayOfWeek];
}

const result = daysOfWeek(new Date(2019, 0, 1), 14);

console.log(result);