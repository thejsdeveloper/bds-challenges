export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat().format(date);
};
