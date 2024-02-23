export function generateArray(length: number): number[] {
  return Array(length).fill(0);
}

export function generateRange(min: number, max: number) {
  if (min < 1) min = 1;
  if (max < min) max = min;
  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  return range;
}
