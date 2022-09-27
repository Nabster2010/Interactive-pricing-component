export const getCost = (value, yearly) => {
  if (value === 0) return { views: "10K", price: getPrice(8, yearly) };
  if (value === 25) return { views: "10K", price: getPrice(12, yearly) };
  if (value === 50) return { views: "50K", price: getPrice(16, yearly) };
  if (value === 75) return { views: "100K", price: getPrice(24, yearly) };
  if (value === 100) return { views: "500K", price: getPrice(36, yearly) };
};

function getPrice(price, yearly) {
  return yearly ? price - price * 0.25 : price;
}
