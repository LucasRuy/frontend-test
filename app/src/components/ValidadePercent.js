const ValidadePercent = (p, n) => {
  const positive = p;
  const negative = n;

  const checkValue = (currentValue) => {
    if (typeof currentValue === typeof 'string') {
      currentValue = parseInt(currentValue, 10);
    } else if (currentValue === null || currentValue === undefined) {
      currentValue = 0;
    }
    return currentValue;
  };

  const total = checkValue(positive) + checkValue(negative);
  let positiveResult = ((positive / total) * 100).toFixed(0);
  let negativeResult = Math.abs(positiveResult - 100);

  if (positiveResult === 'NaN' || negativeResult === 'NaN') {
    positiveResult = '0';
    negativeResult = '0';
  }

  const results = {
    positive: parseInt(positiveResult, 10),
    negative: parseInt(negativeResult, 10),
  };

  return results;
};

export default ValidadePercent;
