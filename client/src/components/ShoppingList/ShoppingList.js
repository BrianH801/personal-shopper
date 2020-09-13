import React from 'react';
import Shoppinglistitems from './ShoppingListItems';

function ShoppingList(props) {
  console.log('Shoppinglists props', props);
  if (props.shoppinglists === undefined) {
    return <p>Loading Shoppinglists</p>;
  }

  return (
    <ul>
      <>
        {props.shoppinglists.map((shoppinglist) => (
          <Shoppinglistitems
            key={shoppinglist.id}
            description={shoppinglist.description}
            quantity={shoppinglist.quantity}
            price={shoppinglist.price}
            flyer_item={shoppinglist.flyer_item}
            shopper_id={shoppinglist.shopper_id}
          />
        ))}
      </>
    </ul>
  );
}

export default ShoppingList;
