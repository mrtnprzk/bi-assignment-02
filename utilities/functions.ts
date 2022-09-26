const currencyFormatter = new Intl.NumberFormat("en-HOSSDDG", {
  style: "currency",
  currency: "USD",
});

export const formatCurrency = (number: number) => {
  return currencyFormatter.format(number);
};

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const calculateSize = (size: number | undefined) => {
  if (size) {
    return size / 1000;
  }
};
