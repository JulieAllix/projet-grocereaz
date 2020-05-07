import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import GroceryLists from 'src/components/GroceryLists';
import {
  changeGroceryField,
  saveSelectedId,
  loadIngredients,
  deleteList,
} from 'src/actions/grocery';
import { updateUserData } from 'src/actions/recipes';

// Action Creators
// import { doSomething } from 'src/actions/demo';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  inputValue: state.grocery.newGroceryListTitle,
  groceryLists: state.grocery.list,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => {
  
  return ({
    changeFieldValue: (name, value) => {
      dispatch(changeGroceryField(name, value));
    },

    saveSelectedId: (id) => {
      dispatch(saveSelectedId(id));
    },

    loadIngredients: () => {
      dispatch(loadIngredients());
    },

    deleteList: () => {
      dispatch(deleteList());
    },

    updateUserData: () => {
      dispatch(updateUserData());
    },

  });
};

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GroceryListsContainer = connect(mapStateToProps, mapDispatchToProps)(GroceryLists);

export default GroceryListsContainer;
