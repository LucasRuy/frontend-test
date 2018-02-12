const ExampleFunction = () => {

  const userInfos = fetch('/javascripts/fazenda.json', { method: 'GET' });

  const makeElement = (userResponse) => {
    let itemInfo = userResponse;

    const listWrapper = document.querySelector('.ranking__body');

    const elItem    = document.createElement('li');
    const elDivImg  = document.createElement('div');
    const elDivInf  = document.createElement('div');
    const elImage   = document.createElement('img');
    const elName    = document.createElement('h3');
    const elDesc    = document.createElement('h6');

    elItem.setAttribute('class', 'ranking__body__item');

    elDivImg.setAttribute('class', 'item-image');
    elDivInf.setAttribute('class', 'item-divisor');

    elImage.setAttribute('src', itemInfo.picture);
    elImage.setAttribute('alt', itemInfo.name);

    elName.textContent = itemInfo.name;
    elDesc.textContent = itemInfo.description;

    elDivImg.appendChild(elImage);

    elDivInf.appendChild(elName);
    elDivInf.appendChild(elDesc);

    elItem.appendChild(elDivImg);
    elItem.appendChild(elDivInf);

    listWrapper.appendChild(elItem);
  };

  userInfos
    .then(response => response.json())
    .then(response => {
      for(let item in response.data){
        makeElement(response.data[item]);
      }
    })
    .catch(err => console.error(err));
};

export default ExampleFunction;