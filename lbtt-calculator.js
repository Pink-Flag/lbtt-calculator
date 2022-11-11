const lbttCalculator = (price) => {
  let taxResult = 0;

  const thresholds = [
    { threshold: 145000, tax: 0.02 },
    { threshold: 250000, tax: 0.05 },
    { threshold: 325000, tax: 0.1 },
    { threshold: 750000, tax: 0.12 },
  ];

  while (price > 145000) {
    if (price > thresholds[3].threshold) {
      taxResult += (price - thresholds[3].threshold) * thresholds[3].tax;
      price = thresholds[3].threshold;
    } else if (price > thresholds[2].threshold) {
      taxResult += (price - thresholds[2].threshold) * thresholds[2].tax;
      price = thresholds[2].threshold;
    } else if (price > thresholds[1].threshold) {
      taxResult += (price - thresholds[1].threshold) * thresholds[1].tax;
      price = thresholds[1].threshold;
    } else if (price > thresholds[0].threshold) {
      taxResult += (price - thresholds[0].threshold) * thresholds[0].tax;
      price = thresholds[0].threshold;
    }
  }

  const roundedResult = Math.round(taxResult);
  return roundedResult;
};

module.exports = lbttCalculator;
