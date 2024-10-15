const getWeekday = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
  return date.toLocaleDateString('en-US', options);
};

const getDayOfMonth = (dateString: string): number => {
  const date = new Date(dateString);
  return date.getDate();
};

const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);

  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getUTCFullYear();

  return `${hours}:${minutes} ${day} ${month} ${year}`;
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
};

export { getWeekday, formatDate, getDayOfMonth, formatDateTime };
