import firebase from 'firebase/app';
import 'firebase/auth';
import mushroomList from '../../components/mushroomList/mushroomList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const logoutButton = $('#navbar-logout-button');

const checkLogInStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      mushroomList.buildForest();
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLogInStatus };
