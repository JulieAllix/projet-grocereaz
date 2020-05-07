import React from 'react';
import classNames from 'classnames';
import { Input, Form, Button, Icon } from 'semantic-ui-react';

import GroceryListsItem from './GroceryListsItem';
import image from 'src/assets/images/V2/salad-1.png';
import FormStyled from 'src/components/FormStyled';

const GroceryLists = ({
  changeFieldValue,
  inputValue,
  saveSelectedId,
  loadIngredients,
  deleteList,
  updateUserData,
}) => {

  const userData = JSON.parse(sessionStorage.getItem('userData'));
  //console.log(userData);
  const groceryLists = userData.shoppingList;
  // console.log(groceryLists);

  return (
    <FormStyled>
      <section className="content-part">
        <h2>My shopping lists</h2>
        <div className="list grocery-lists">
          {groceryLists.map((list) => (
            <GroceryListsItem
              key={list.id}
              id={list.id}
              title={list.title}
              saveSelectedId={saveSelectedId}
              loadIngredients={loadIngredients}
              deleteList={deleteList}
              updateUserData={updateUserData}
            />
          ))}
        </div>
      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A salad"
            className="image-size"
          />
        </div>

      </section>

    </FormStyled>
  );
};

export default GroceryLists;
