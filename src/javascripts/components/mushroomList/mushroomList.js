import mushroomData from '../../helpers/data/mushroomData';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => console.warn('get Mushrooms Worked', mushrooms))
    .catch((err) => console.error('get mushrooms broke :(', err));
};

export default { buildForest };
