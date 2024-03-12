export const formatNumber = (num: number) => {
  return Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    num
  );
};
