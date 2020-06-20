import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import 'bootstrap';
import 'jquery';
import '../styles/main.scss';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/myNavbar/myNavbar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLogInStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
