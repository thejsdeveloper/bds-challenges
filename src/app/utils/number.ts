export const formatNumber = (num: number) => {
  return Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    num
  );
};

export const formatTime = (duration: number, useShortFormat = false) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  if (useShortFormat) {
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  } else {
    return `${minutes}m ${seconds}s`;
  }
};
