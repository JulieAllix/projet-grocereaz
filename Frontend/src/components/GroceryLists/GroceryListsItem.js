import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const GroceryListsItem = ({
  id,
  title,
  saveSelectedId,
  loadIngredients,
  deleteList,
  updateUserData,
}) => {
  const handleClick1 = () => {
    // Gestion du click sur l'icone eye
    console.log('handleClick1 sur le lien', id);
    saveSelectedId(id);
    // loadIngredients();
  };

  const handleClick2 = () => {
    // Gestion du click sur l'icone eye
    console.log('handleClick2 sur le lien', id);
    saveSelectedId(id);
    deleteList();
  };
  return (
    <div className="grocery-item">
      <div className="groceryListsItem-info">
        <Link to={`/grocery-lists/${id}`}>
          <Icon name="eye" className="link" link onClick={handleClick1} />
        </Link>
        {title}
      </div>
      <Icon name="trash" className="link" link onClick={handleClick2}/>
    </div>
  );
};

export default GroceryListsItem;
