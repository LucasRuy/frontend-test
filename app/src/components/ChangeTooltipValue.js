const ChangeTooltipValue = (objValues = null) => {
  const doc = document;
  const toolPositive = doc.querySelector('.tooltip .tooltip__aproved p');
  const toolNegative = doc.querySelector('.tooltip .tooltip__reproved p');
  const allItems = doc.querySelectorAll('.ranking__body__item');

  const hoverEvent = (current) => {
    toolPositive.textContent = objValues[current].positive;
    toolNegative.textContent = objValues[current].negative;
  };

  allItems.forEach((element, index) => {
    if (window.innerWidth > 768) {
      element.addEventListener('mouseover', () => hoverEvent(index), false);
    } else {
      element.addEventListener('click', () => hoverEvent(index), false);
    }
  });
};

export default ChangeTooltipValue;
