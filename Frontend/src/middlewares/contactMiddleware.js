import axios from 'axios';

import { SEND_MESSAGE } from 'src/actions/contact';

const contactMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case SEND_MESSAGE: {
      console.log('Lancement de l\'action SEND_MESSAGE...');
      const state = store.getState();
      axios({
        method:'post',
        url: ``,
        data:{
          firstname: state.contact.firstname,
          lastname: state.contact.lastname,
          email: state.contact.email,
          object: state.contact.object,
          message: state.contact.message,       },
      })
      .then((response) => {
        console.log('contactMiddleware ok :', response.data);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite', error);
      });
      break;
    }
    default:
      break;
  }

  next(action);
};

export default contactMiddleware;
