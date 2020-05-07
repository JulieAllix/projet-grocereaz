import axios from 'axios';

import { LOAD_INGREDIENTS, DELETE_LIST, loadShoppingList, saveIngredientsList } from 'src/actions/grocery';
import { updateUserData } from 'src/actions/recipes';
import { saveUserData } from 'src/actions/auth';

const groceryMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case LOAD_INGREDIENTS: {
      console.log('Lancement de l\'action LOAD_INGREDIENTS...');
      const state = store.getState();
      const listId = state.grocery.selectedId;
      // console.log(listId);
      axios({
        method:'post',
        url: `${process.env.URL_API}/api/user/shopping-list`,
        data:{
          token: sessionStorage.getItem('userToken'),
          shoppingListId: listId,
        },
      })
      .then((response) => {
        console.log('groceryMiddleware shopping-list ok :', response.data);

        store.dispatch(saveIngredientsList(response.data.userShoppingList));
        sessionStorage.setItem('ingredientsList', JSON.stringify(response.data.userShoppingList));
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite', error);
      });
      break;
    }

    case DELETE_LIST: {
      console.log('Lancement de l\'action DELETE_LIST...');
      const state = store.getState();
      axios({
        method:'post',
        url: `${process.env.URL_API}/api/user/shopping-list-remove/${state.grocery.selectedId}`,
        data:{
          token: sessionStorage.getItem('userToken'),
        },
      })
      .then((response) => {
        console.log('groceryMiddleware deleteList ok :', response.data);

        axios.post(`${process.env.URL_API}/api/user/`, {
            token: sessionStorage.getItem('userToken'),
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
      });
      break;
    }

    default:
      break;
  }

  next(action);
};

export default groceryMiddleware;
