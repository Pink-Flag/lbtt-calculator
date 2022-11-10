const lbttCalculator = (price) => {
  let taxResult = 0;

  while (price > 145000) {
    if (price > 750000) {
      taxResult += (price - 750000) * 0.12;
      price = 750000;
    } else if (price > 325000) {
      taxResult += (price - 325000) * 0.1;
      price = 325000;
    } else if (price > 250000) {
      taxResult += (price - 250000) * 0.05;
      price = 250000;
    } else if (price > 145000) {
      taxResult += (price - 145000) * 0.02;
      price = 145000;
    }
  }
  return Math.floor(taxResult);
};

module.exports = lbttCalculator;

