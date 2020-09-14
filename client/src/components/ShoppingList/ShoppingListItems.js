import React from 'react';

function ShoppingListItems({
  id,
  description,
  quantity,
  price,
  flyer_item,
  shopper_id,
}) {
  return (
    <ul className='shoppinglistitems__container container'>
      <li className='shoppinglistitems__id' id={id}>
        <div className='shoppinglistitems__description'>
          <h4>{description}</h4>
        </div>

        <div className='shoppinglistitems__quantity'>
          <p>{quantity}</p>
        </div>
        <div className='shoppinglistitems__price'>
          <p>{price}</p>
        </div>
        <div className='shoppinglistitems__flyer-item'>
          <p>{flyer_item}</p>
        </div>
        <div className='shoppinglistitems__shopper_id'>
          <p>{shopper_id}</p>
        </div>
      </li>
    </ul>
  );
}
export default ShoppingListItems;
