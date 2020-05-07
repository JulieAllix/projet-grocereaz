import axios from 'axios';

import {
  GENERATE_GROCERY_LIST,
  ADD_TO_FAVORITE_RECIPES,
  REMOVE_FROM_FAVORITE_RECIPES,
  UPDATE_GROCERY_LIST,
  UPDATE_USER_DATA,
  setAddToListStatus,
  updateFavoriteRecipes,
  setLoadingStatus,
  updateUserData,
  setAddToFavoriteStatus,
  setUpdateMethod,
} from 'src/actions/recipes';
import { saveUserData } from 'src/actions/auth';


const generateMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GENERATE_GROCERY_LIST: {
      const state = store.getState();
      console.log(state.auth.newGroceryList);
      axios.post(`${process.env.URL_API}/api/user/shopping-list-add`, {
        token: sessionStorage.getItem('userToken'),
        shoppingListTitle: state.auth.newGroceryList,
        ingredientsList: state.modals.generateListData,
      })
        .then((response) => {
          const results = response.data;
          console.log(results);
          store.dispatch(updateUserData());
          store.dispatch(setAddToListStatus(true));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setLoadingStatus(false));
        });
      next(action);
      break;
    }
    case ADD_TO_FAVORITE_RECIPES: {
      const state = store.getState();
      console.log('Je suis dans le middleware add to fav !');
      axios.post(`${process.env.URL_API}/api/user/recipe-add`, {
        apiId: state.modals.recipeId,
        recipeTitle: state.modals.title,
        token: sessionStorage.getItem('userToken'),
      })
        .then((response) => {
          const results = response.data;
          // enables to update the sessionStorage of favorite
          // recipes without loading the /favorite-recipes page
          store.dispatch(setUpdateMethod('add'));
          store.dispatch(updateFavoriteRecipes());
          // sessionStorage.setItem('favoriteRecipes', JSON.stringify(results));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setLoadingStatus(false));
          store.dispatch(setAddToFavoriteStatus(true));
        });
      next(action);
      break;
    }
    case REMOVE_FROM_FAVORITE_RECIPES: {
      const state = store.getState();
      axios.post(`${process.env.URL_API}/api/user/recipe-remove`, {
        apiId: state.modals.recipeId,
        token: sessionStorage.getItem('userToken'),
      })
        .then((response) => {
          const results = response.data;
          console.log('REMOVE_FROM_FAVORITE_RECIPES');
          store.dispatch(setUpdateMethod('delete'));
          store.dispatch(updateFavoriteRecipes());
        })
        .catch((error) => {
          console.log('Axios fail');
          console.log(state.modals.recipeId);
          console.log(error);
          store.dispatch(setLoadingStatus(false));
        });

      next(action);
      break;
    }

    case UPDATE_GROCERY_LIST: {
      const state = store.getState();
      const id = state.modals.selectedLists;
      console.log(id);
      axios.post(`${process.env.URL_API}/api/user/shopping-list-update/${id}`, {
        token: sessionStorage.getItem('userToken'),
        ingredientsList: state.modals.generateListData,
      })
        .then((response) => {
          const results = response.data;
          console.log('Tremendous success !');
          console.log(results);
          store.dispatch(setAddToListStatus(true));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setLoadingStatus(false));
        });
      next(action);
      break;
    }

    case UPDATE_USER_DATA: {
      axios.post(`${process.env.URL_API}/api/user/`, {
        token: sessionStorage.getItem('userToken'),
      })
        .then((response) => {
          sessionStorage.setItem('userData', JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setLoadingStatus(false));
        });

      next(action);
      break;
    }

    default:
      next(action);
      break;
  }
};
export default generateMiddleware;
