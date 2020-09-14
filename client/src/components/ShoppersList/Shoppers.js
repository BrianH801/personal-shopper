import React from 'react';

function Shoppers({ id, name, address, phone, email }) {
  return (
    <ul className='shopper__container container'>
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
      </li>
    </ul>
  );
}
export default Shoppers;
