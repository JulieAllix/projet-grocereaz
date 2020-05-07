import axios from 'axios';

import {
  LOAD_RECIPES,
  LOAD_FAVORITE_RECIPES,
  UPDATE_FAVORITE_RECIPES,
  SEARCH,
  saveLoadedRecipes,
  saveFavoriteRecipes,
  setErrorStatus,
  setLoadingStatus,
  setAddToFavoriteStatus,
  setRemoveFromFavoriteStatus,
  setUpdateMethod,
} from 'src/actions/recipes';

const loadMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_RECIPES: {
      // I launch an ajax request to my server
      // I'm sending the sign up data (firstname, lastname, email, password)
      /*
      const state = store.getState();
      axios.get('process.env.URL_API/api/home', {
        token: sessionStorage.getItem('userToken'),
      })
      */
      console.log(process.env);
      // console.log(URL_API);
      console.log(process.env.URL_API);
      axios.get(`${process.env.URL_API}/api/home`)
        .then((response) => {
          const results = response.data[0];
          console.log(results);
          sessionStorage.setItem('homeData', JSON.stringify(results));
          store.dispatch(saveLoadedRecipes(results));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setLoadingStatus(false));
        });

      next(action);
      break;
    }

    case LOAD_FAVORITE_RECIPES: {
      const state = store.getState();
      // console.log(state.auth.userToken);
      axios.post(`${process.env.URL_API}/api/user/recipe`, {
        token: sessionStorage.getItem('userToken'),
      })
        .then((response) => {
          const results = response.data[0];
          if (results === undefined) {
            results = [];
          }
          else {
            sessionStorage.setItem('favoriteRecipes', JSON.stringify(results));
            window.location.href = `${process.env.URL_FRONT}/favorite-recipes`;
          }
          store.dispatch(saveFavoriteRecipes(results));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setLoadingStatus(false));
        });

      next(action);
      break;
    }

    case UPDATE_FAVORITE_RECIPES: {
      const state = store.getState();
      // console.log(state.auth.userToken);
      axios.post(`${process.env.URL_API}/api/user/recipe`, {
        token: sessionStorage.getItem('userToken'),
      })
        .then((response) => {
          const results = response.data[0];
          if (results === undefined) {
            console.log('results undefined');
            results = [];
          }
          else {
            console.log('UPDATE_FAVORITE_RECIPES');
            console.log(state.home.updateMethod );
            sessionStorage.setItem('favoriteRecipes', JSON.stringify(results));
            if (state.home.updateMethod === 'delete') {
              store.dispatch(setRemoveFromFavoriteStatus(true));
              store.dispatch(setUpdateMethod(''));
            }
            else {
              store.dispatch(setAddToFavoriteStatus(true));
              store.dispatch(setUpdateMethod(''));
            }
          }
          // store.dispatch(saveFavoriteRecipes(results));
        })
        .catch((error) => {
          console.log(error);
          console.log('error axios update');
          store.dispatch(setLoadingStatus(false));
        });

      next(action);
      break;
    }

    case SEARCH: {
      // I launch an ajax request to my server
      // I'm sending the search data

      const state = store.getState();
      axios.post(`${process.env.URL_API}/api/recipe/search`, {
        recipeSearch: state.search.searchBar,
        diets: state.search.selectedFilters.diets,
        intolerance: state.search.selectedFilters.intolerance,
        token: sessionStorage.getItem('userToken'),
      })
        .then((response) => {
          let loadedData = response.data[0];

          if (loadedData === undefined) {
            loadedData = state.home.recipesData;
            store.dispatch(setErrorStatus(true));
          }
          else {
            sessionStorage.setItem('searchData', JSON.stringify(loadedData));
            window.location.href = process.env.URL_FRONT;
          }
          store.dispatch(saveLoadedRecipes(loadedData));
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

export default loadMiddleware;
