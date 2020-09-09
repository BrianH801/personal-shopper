import React from 'react';

function Shoppers({
  id,
  name,
  address,
  phone,
  email,
  credit_card,
  expiry_date,
}) {
  return (
    <li className='shopper__id' id={id}>
      <div className='shopper__name'>
        <h4>{name}</h4>
      </div>
      <div className='shopper__address'>
        <p>{address}</p>
      </div>
      <div className='shopper__phone'>
        <p>{phone}</p>
      </div>
      <div className='shopper__email'>
        <p>{email}</p>
      </div>
      <div className='shopper__credit_card'>
        <p>{credit_card}</p>
      </div>
      <div className='shopper__expiry_date'>
        <p>{expiry_date}</p>
      </div>
    </li>
  );
}
export default Shoppers;
