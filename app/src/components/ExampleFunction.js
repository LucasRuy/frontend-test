const ExampleFunction = () => {

  const userInfos = fetch('/javascripts/fazenda.json', { method: 'GET' });

  userInfos
    .then(response => response.json())
    .then(response => {
      console.log('Teste response: ', response.data);

      const elementUL = document.createElement('ul');

      for(let item in response.data){

        let itemInfo = response.data[item];

        const elementLI   = document.createElement('li');
        const name        = document.createElement('p');
        const image       = document.createElement('img');
        const description = document.createElement('span');

        name.textContent = itemInfo.name;
        description.textContent = itemInfo.description;
        image.setAttribute('src', itemInfo.picture);

        elementLI.appendChild(name);
        elementLI.appendChild(description);
        elementLI.appendChild(image);
        elementUL.appendChild(elementLI);
      }

      document.querySelector('.section--home').appendChild(elementUL);
    })
    .catch(err => console.error(err));
};

export default ExampleFunction;