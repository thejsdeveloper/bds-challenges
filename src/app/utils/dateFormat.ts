export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "short",
  }).format(date);
};

export const formatDateLong = (date: Date) => {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
  }).format(date);
};

export const formatTime = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  return formatter.format(date);
};
