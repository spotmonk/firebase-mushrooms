import firebase from 'firebase/app';
import 'firebase/auth';
import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistsList from '../../components/mycologistsList/mycologistsList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const logoutButton = $('#navbar-logout-button');

const checkLogInStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      mushroomList.buildForest();
      mycologistsList.buildMycologists();
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLogInStatus };
