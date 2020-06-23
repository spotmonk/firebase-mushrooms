import mycologistsComponent from '../mycologists/mycologists';
import mycologistData from '../../helpers/data/mycologistsData';
import singleMycologist from '../singleMycologist/singleMycologist';
import utils from '../../helpers/utils';

const buildHut = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      let domString = '<h2 class="text-center">Huts</h2><div class="d-flex flex-wrap">';
      mycologists.forEach((mycologist) => {
        domString += mycologistsComponent.mycologistMaker(mycologist);
      });
      utils.printToDom('#hut', domString);
      $('body').on('click', '.myco-card', singleMycologist.buildMycologist);
    })
    .catch((err) => console.error('get mycologists broke', err));
};

export default { buildHut };
