const ExampleFunction = () => {

  const userInfos = fetch('/javascripts/fazenda.json', { method: 'GET' });

  const makeElement = (userResponse) => {
    const { name, description, picture } = userResponse;

    const listWrapper = document.querySelector('.ranking__body');
    const listItem    = document.createElement('li');

    listItem.setAttribute('class', 'ranking__body__item')

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

  userInfos
    .then(response => response.json())
    .then(response => {
      console.log('Persons: ', response);

      for(let item in response.data){
        makeElement(response.data[item]);
      }

    })
    .catch(err => console.error(err));
};

export default ExampleFunction;