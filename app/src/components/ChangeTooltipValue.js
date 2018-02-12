const ChangeTooltipValue = (objValues = null) => {
  const toolPositive = document.querySelector('.tooltip .tooltip__aproved p');
  const toolNegative = document.querySelector('.tooltip .tooltip__reproved p');
  const allItems = document.querySelectorAll('.ranking__body__item');

  const hoverEvent = current => {
    toolPositive.textContent = objValues[current].positive;
    toolNegative.textContent = objValues[current].negative;
  };

  allItems.forEach((element, index) => {
    if(window.innerWidth > 768){
      element.addEventListener('mouseover', function(){
        hoverEvent(index);
      }, false);
    } else {
      element.addEventListener('click', function(){
        hoverEvent(index);
      }, false);
    }
  });
};

export default ChangeTooltipValue;