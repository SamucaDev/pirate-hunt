export const formatCurrency = (value) => {
  const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  const formattedValue = value.toLocaleString("en-US", options);

  return formattedValue;
};
