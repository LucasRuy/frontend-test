const MakeElement = (userResponse, currentIndex) => {
  const { name, description, picture } = userResponse.infos.user;

  const doc = document;
  const listWrapper = doc.querySelector('.ranking__body');
  const tooltip = doc.querySelector('.tooltip');
  const listItem = doc.createElement('li');

  listItem.setAttribute('class', 'ranking__body__item');
  listItem.setAttribute('data-id', currentIndex);

  const markup = `
    <div class="item-image">
      <figure>
        <img src='${picture}' alt='${name}' />
      </figure>
    </div>
    <div class="item-divisor">
      <h3>${name}</h3>
      <h6>${description}</h6>
    </div>
  `;

  listItem.innerHTML = markup;
  listWrapper.insertBefore(listItem, tooltip);
};

export default MakeElement;
