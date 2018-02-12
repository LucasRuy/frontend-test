import ChangeTooltipPosition  from './ChangeTooltipPosition';
import ValidadePercent        from './ValidadePercent';
import MakeElement            from './MakeElement';

const ExampleFunction = () => {

  const userInfos = fetch('/javascripts/fazenda.json', { method: 'GET' });

  userInfos
    .then(response => response.json())
    .then(response => {
      const arr = new Array();

      for(let item in response.data){
        const { positive, negative } = response.data[item];

        arr.push({
          positive: ValidadePercent(positive, negative),
          infos: {user: response.data[item]}
        });
      }

      const orderObjDesc = function(a, b) {
        if (a.positive < b.positive) {
          return 1;
        }
        if (a.positive > b.positive) {
          return -1;
        }
        return 0;
      }

      let ranking = arr.sort(orderObjDesc);

      ranking.forEach((element, index) => {
        MakeElement(element, index);
      });

      ChangeTooltipPosition();
    })
    .catch(err => console.error(err));
};

export default ExampleFunction;