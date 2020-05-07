// Action Types
import {
  ADD_NEW_LIST,
  LOAD_SHOPPING_LIST,
  SAVE_SELECTED_ID,
  SAVE_INGREDIENTS_LISTS,
  CHANGE_GROCERY_FIELD,
  ERASE_INGREDIENTS_LIST,
} from 'src/actions/grocery';


// Initial State
const initialState = {
  selectedId: '',
  list: [],
  ingredientsList: [],
};

// Reducer
const groceryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_GROCERY_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case LOAD_SHOPPING_LIST:
      return {
        ...state,
        list: action.list,
      };

    case SAVE_SELECTED_ID:
      return {
        ...state,
        selectedId: action.id,
      };

    case SAVE_INGREDIENTS_LISTS:
      return {
        ...state,
        ingredientsList: action.list,
      };
    case ERASE_INGREDIENTS_LIST:
      return {
        ...state,
        ingredientsList: [],
      };

    default:
      return state;
  }
};

export default groceryReducer;
