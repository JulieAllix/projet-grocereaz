import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import GroceryList from 'src/components/GroceryList';

// Action Creators
import { saveSelectedId, loadIngredients } from 'src/actions/grocery';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return ({
    selectedId: id,
    ingredientsList: state.grocery.ingredientsList,
  });
};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  saveSelectedId: (id) => {
    dispatch(saveSelectedId(id));
  },
  loadIngredients: () => {
    dispatch(loadIngredients());
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(GroceryList);

export default GroceryListContainer;
