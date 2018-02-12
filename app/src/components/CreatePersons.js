import ValidadePercent  from './ValidadePercent';
import MakeElement      from './MakeElement';

const ExampleFunction = () => {

  const userInfos = fetch('/javascripts/fazenda.json', { method: 'GET' });

  userInfos
    .then(response => response.json())
    .then(response => {
      console.log('Persons: ', response);
      const arr = new Array();

      for(let item in response.data){
        const { positive, negative } = response.data[item];

        arr.push({
          positive: ValidadePercent(positive, negative),
          infos: {user: response.data[item]}
        });
      }

      const orderDesc = function(a, b) {
        if (a.positive < b.positive) {
          return 1;
        }
        if (a.positive > b.positive) {
          return -1;
        }
        return 0;
      }

      let ranking = arr.sort(orderDesc);

      ranking.forEach(element => {
        console.log(element);

        MakeElement(element);
      });

    })
    .catch(err => console.error(err));
};

export default ExampleFunction;