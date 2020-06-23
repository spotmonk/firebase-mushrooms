import firebase from 'firebase/app';
import 'firebase/auth';

import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistList from '../../components/mycologistsList/mycologistsList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const hutDiv = $('#hut');
const logoutButton = $('#navbar-logout-button');
const singleMycoDiv = $('#single-myco');

const checkLogInStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      hutDiv.removeClass('hide');
      singleMycoDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      mushroomList.buildForest();
      mycologistList.buildHut();
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      hutDiv.addClass('hide');
      singleMycoDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLogInStatus };
