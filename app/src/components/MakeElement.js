const MakeElement = (userResponse, currentIndex) => {
  const { name, description, picture } = userResponse.infos.user;

  const listWrapper = document.querySelector('.ranking__body');
  const listItem    = document.createElement('li');

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
  listWrapper.appendChild(listItem);
};

export default MakeElement;