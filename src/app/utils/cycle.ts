export const cycle = (min: number, max: number, value: number) => {
  if (value < 0) {
    return max;
  }

  if (value > max) {
    return min;
  }

  return value;
};
