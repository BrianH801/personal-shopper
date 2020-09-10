import React from 'react';

function ShoppingListItems({ id, description, quantity, price, flyer_item }) {
  return (
    <li className='shoppinglist__id' id={id}>
      <div className='shopperlist__name'>
        <h4>{description}Hello</h4>
      </div>
      <div className='shopperlist__address'>
        <p>{quantity}</p>
      </div>
      <div className='shopperlist__phone'>
        <p>{price}</p>
      </div>
      <div className='shopperlist__email'>
        <p>{flyer_item}</p>
      </div>
    </li>
  );
}
export default ShoppingListItems;
