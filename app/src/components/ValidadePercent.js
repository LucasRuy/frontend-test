const ValidadePercent = (p, n) => {
  let positive = p;
  let negative = n;

  const checkValue = (currentValue) => {
    if(typeof currentValue === typeof 'string'){
      currentValue = parseInt(currentValue);
    } else if (currentValue === null || currentValue === undefined){
      currentValue = 0;
    }
    return currentValue;
  };

  let total = checkValue(positive) + checkValue(negative);
  let positiveResult = ((positive / total) * 100).toFixed(0);
  let negativeResult = Math.abs(positiveResult - 100);

  if(positiveResult === 'NaN' || negativeResult === 'NaN'){
    positiveResult = '0';
    negativeResult = '0';
  }

  const results = {
    positive: parseInt(positiveResult),
    negative: parseInt(negativeResult)
  };

  return results;
};

export default ValidadePercent;