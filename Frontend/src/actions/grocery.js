// Types
export const CHANGE_GROCERY_FIELD = 'CHANGE_GROCERY_FIELD';
export const LOAD_SHOPPING_LIST = 'LOAD_SHOPPING_LIST';
export const SAVE_SELECTED_ID = 'SAVE_SELECTED_ID';
export const SAVE_INGREDIENTS_LISTS = 'SAVE_INGREDIENTS_LISTS';
export const LOAD_INGREDIENTS = 'LOAD_INGREDIENTS';
export const DELETE_LIST = 'DELETE_LIST';
export const ERASE_INGREDIENTS_LIST = 'ERASE_INGREDIENTS_LIST';


// Creators
export const changeGroceryField = (name, value) => ({
  type: CHANGE_GROCERY_FIELD,
  name,
  value,
});

export const loadShoppingList = (list) => ({
  type: LOAD_SHOPPING_LIST,
  list,
});

export const saveSelectedId = (id) => ({
  type: SAVE_SELECTED_ID,
  id,
});

export const saveIngredientsList = (list) => ({
  type: SAVE_INGREDIENTS_LISTS,
  list,
});

export const loadIngredients = () => ({
  type: LOAD_INGREDIENTS,
});

export const deleteList = () => ({
  type: DELETE_LIST,
});

export const eraseIngredientsList = () => ({
  type: ERASE_INGREDIENTS_LIST,
});
