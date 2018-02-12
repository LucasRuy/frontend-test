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
  let splited = ((positive / total) * 100).toFixed(0);

  if(splited === 'NaN'){
    splited = '0';
  }

  return splited;
};

export default ValidadePercent;