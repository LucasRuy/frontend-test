const ChangeTooltipPosition = () => {
  const hover   = document.querySelector('.tooltip');
  const items   = document.querySelectorAll('.ranking__body__item');
  const screen  = window.innerWidth;

  const changePosition = (e) => {
    e.preventDefault();

    const current   = e.currentTarget.dataset.id;
    const accordion = document.querySelector('.ranking__body');

    const getAccordionHeight = window.getComputedStyle(accordion).height.split('px')[0];
    const translateY = getAccordionHeight / items.length;

    items.forEach(function(element, index){
      hover.style.transform = 'translateY(' + (translateY * current) + 'px)';
    });
  }

  const defaultPosition = (e) => {
    e.preventDefault();
    hover.style.transform = 'translateY(0px)';
  }

  items.forEach(function(element, index){
    if(screen >= 768){
      items[index].addEventListener('mouseover', changePosition, false);
      items[index].addEventListener('mouseleave', defaultPosition, false);
    } else {
      items[index].addEventListener('click', changePosition, false);
    }
  });
};

export default ChangeTooltipPosition;