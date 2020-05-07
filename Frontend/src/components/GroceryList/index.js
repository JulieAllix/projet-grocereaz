import React, { useEffect } from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

import IngredientItem from './IngredientItem';
import FormStyled from 'src/components/FormStyled';
import image from 'src/assets/images/V2/salad-2.png';

const GroceryList = ({
  selectedId,
  saveSelectedId,
  loadIngredients,
  ingredientsList,
}) => {
  // saveSelectedId(selectedId);
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const shoppingList = userData.shoppingList;
  // console.log('Je suis la shoppingList', shoppingList);
  const name = shoppingList.find((list) => (list.id == selectedId)).title;
  console.log('Je suis le titre de la shoppingList sélectionné ', name);

  //const ingredientsList = JSON.parse(sessionStorage.getItem('ingredientsList'));
  //console.log('Je suis la liste des ingrédients', ingredientsList);
 
  useEffect(() => {
    loadIngredients();
  }, []);
  return (
    <FormStyled>
      <section className="content-part">
        <h2>{name}</h2>
        <div className="list ingredients-list">
          {ingredientsList.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              label={`${ingredient.amount} ${ingredient.name} ${ingredient.unit}`}
            />
          ))}
        </div>
      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A greek salad."
            className="image-size"
          />
        </div>

      </section>
    </FormStyled>
  );
};

export default GroceryList;
