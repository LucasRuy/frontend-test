import ChangeTooltipPosition from './ChangeTooltipPosition';
import ChangeTooltipValue from './ChangeTooltipValue';
import ValidadePercent from './ValidadePercent';
import MakeElement from './MakeElement';
import { orderObjDesc } from '../utils';

const ExampleFunction = () => {
  const userInfos = fetch('/javascripts/fazenda.json', { method: 'GET' });
  userInfos
    .then(response => response.json())
    .then((response) => {
      const temp = [];

      for (const item in response.data) {
        const { positive, negative } = response.data[item];

        temp.push({
          positive: ValidadePercent(positive, negative).positive,
          negative: ValidadePercent(positive, negative).negative,
          infos: { user: response.data[item] },
        });
      }

      const ranking = temp.sort(orderObjDesc);

      ranking.forEach((element, index) => {
        MakeElement(element, index);
      });

      ChangeTooltipValue(ranking);
      ChangeTooltipPosition();
    })
    .catch(err => console.error(err));
};

export default ExampleFunction;
