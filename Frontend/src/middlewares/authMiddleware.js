/* eslint-disable no-console */
import axios from 'axios';
// import Cookies from 'js-cookie';


import {
  LOGIN,
  LOGOUT,
  REGISTER,
  SEND_RESET_PASSWORD,
  RESET_PASSWORD,
  setUser,
  setMember,
  UPDATE_DATA, 
  changeUserData, 
  setConnectedUser, 
  saveUserData,
  LOAD_DATA,
  displayErrors,
} from 'src/actions/auth';
import { loadData } from '../actions/auth';
import { loadShoppingList } from 'src/actions/grocery';

// Middleware
const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // console.log('Lancement de l\'action LOGIN...');
      const state = store.getState();
      axios.post(`${process.env.URL_API}/api/login`, {
        email: state.auth.email,
        password: state.auth.password,
        withCredentials: true,
            })
        .then((response) => {
          console.log('AuthMiddleware connection ok :', response.data);

          console.log('Enregistrement userToken dans sessionStorage' );
          sessionStorage.setItem('userToken', response.data.token);
          console.log('Chargement des userData');
          store.dispatch(setUser(response.data.token, response.data.result));
          store.dispatch(setConnectedUser(response.data.token, response.data.result, true));
          axios.post(`${process.env.URL_API}/api/user/`, {
            token: response.data.token,
          })
            .then((response) => {
              //console.log('Je charge les userDatas dans sessionStorage: ', JSON.stringify(response.data));
              sessionStorage.setItem('userData', JSON.stringify(response.data));
              //console.log('sauve les userData dans le state.auth');
              store.dispatch(saveUserData(
                response.data.shoppingList,
                response.data.id, 
                response.data.firstname, 
                response.data.lastname, 
                response.data.email,
                true,
                true,
              ));
              //console.log('sauve les userData dans le state.grocery');
              store.dispatch(loadShoppingList(response.data.shoppingList));
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.error('Une erreur s\'est produite', error);
          window.location.href = '/error';
        });
      break;
    }

    case LOGOUT: {
      console.log('Lancement de l\'action LOGOUT...');
      const state = store.getState();
      axios({
        method:'get',
        url:`${process.env.URL_API}/api/logout`,
      })
      .then((response) => {
        console.log('AuthMiddleware déconnection ok :', response.data);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite', error);
      });
      break;
    }

    case REGISTER: {
      const state = store.getState();
      // I launch an ajax request to my server
      // I'm sending the sign up data (firstname, lastname, email, password)
      axios({
        method: 'post',
        url: `${process.env.URL_API}/api/register`, 
        data: {
          firstname: state.auth.firstname,
          lastname: state.auth.lastname,
          email: state.auth.email,
          password: state.auth.password,
          password_confirmation: state.auth.confirmPassword,
        },
      })
      // If the post request is a success, I inform the user that the account was created and I redirect him/her to the sign in page
      .then((response) => {
        console.log(response.data);
        store.dispatch(setMember(response.data.resultat));
      })
      .catch((error) => {
        console.log(error);
        window.location.href = '/error';

      });
      break;
    }

    case UPDATE_DATA: {
      const state = store.getState();
      // I launch an ajax request to my server
      // I'm sending the sign up data (firstname, lastname, email, password)
      axios({
        method: 'post',
        url: `${process.env.URL_API}/api/user/edit`, 
        data: {
          token: sessionStorage.getItem('userToken'),
          firstname: state.user.firstname,
          lastname: state.user.lastname,
          email: state.user.email,
        },
      })
      // If the post request is a success, I inform the user that the account was created and I redirect him/her to the sign in page
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    }

    case SEND_RESET_PASSWORD: {
      console.log('Lancement de l\'action SEND_RESET_PASSWORD...');
      const state = store.getState();

      axios.post(`${process.env.URL_API}/api/forgotten-pwd`, {
        email: state.auth.email,
      })
        .then((response) => {
          console.log('AuthMiddleware sendResetPassword ok :', response.data);
        })
        .catch((error) => {
          console.error('Une erreur s\'est produite', error);
        });
      break;
    }

    case RESET_PASSWORD: {
      const state = store.getState();
      console.log('Lancement de l\'action RESET_PASSWORD...', state);

      axios.post(`${process.env.URL_API}/api/reset-pwd`, {
        password: state.auth.password,
        password_confirmation: state.auth.confirmPassword,
        token: state.auth.token,
      })
        .then((response) => {
          console.log('AuthMiddleware resetPassword ok :', response.data);
        })
        .catch((error) => {
          console.error('Une erreur s\'est produite', error);
        });
      break;
    }

    /*case LOAD_DATA: {
      console.log('Lancement de LOAD_DATA...');
      const state = store.getState();
      const userToken = (sessionStorage.getItem('userToken') === null)?'':sessionStorage.getItem('userToken');
      // console.log('JE suis userToken dans LoadData :', sessionStorage.getItem('userToken'));
      axios.post('process.env.URL_API/api/user/', {
        token: userToken,
      })
        .then((response) => {
          store.dispatch(saveUserData(
            response.data.id,
            response.data.firstname,
            response.data.lastname,
            response.data.email, 
          ));
          store.dispatch(setUser(sessionStorage.getItem('userToken'), response.data.result));
          store.dispatch(setConnectedUser(sessionStorage.getItem('userToken'), true, true));
        })
        .catch((error) => {
          console.log(error);
        });
    }*/

    default:
      break;
  }

  next(action);
};

export default authMiddleware;
