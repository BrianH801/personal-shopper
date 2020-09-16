import React from 'react';
import Shoppers from './Shoppers';

function ShoppersList(props) {
  console.log('Shopperslist props', props);
  if (props.shoppers === undefined) {
    return <p>Loading Shoppers</p>;
  }

  return (
    <>
      <div className='heading__labels'>
        <span className='heading__span'>Name</span>{' '}
        <span className='heading__span'>Address</span>{' '}
        <span className='heading__span'>Phone</span>{' '}
        <span className='heading__span'>Email</span>
      </div>
      <ul>
        <>
          {props.shoppers.map((shopper) => (
            <Shoppers
              key={shopper.id}
              name={shopper.name}
              address={shopper.address}
              phone={shopper.phone}
              email={shopper.email}
            />
          ))}
        </>
      </ul>
    </>
  );
}

export default ShoppersList;
