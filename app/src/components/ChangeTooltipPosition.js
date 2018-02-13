const ChangeTooltipPosition = () => {
  const doc = document;
  const hover = doc.querySelector('.tooltip');
  const items = doc.querySelectorAll('.ranking__body__item');
  const screen = window.innerWidth;

  const changePosition = (e) => {
    e.preventDefault();

    const current = e.currentTarget.dataset.id;
    const accordion = doc.querySelector('.ranking__body');

    const getAccordionHeight = window.getComputedStyle(accordion).height.split('px')[0];
    const translateY = getAccordionHeight / items.length;

    items.forEach(() => {
      hover.style.transform = `translateY(${translateY * current}px)`;
    });
  };

  const defaultPosition = (e) => {
    e.preventDefault();
    hover.style.transform = 'translateY(0px)';
  };

  items.forEach((element, index) => {
    if (screen > 768) {
      items[index].addEventListener('mouseover', changePosition, false);
      items[index].addEventListener('mouseleave', defaultPosition, false);
    } else {
      items[index].addEventListener('click', changePosition, false);
    }
  });
};

export default ChangeTooltipPosition;
