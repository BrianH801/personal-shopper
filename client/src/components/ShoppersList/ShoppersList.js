import React from 'react';
import Shoppers from './Shoppers';

function ShoppersList(props) {
  console.log('Shopperslist props', props);
  if (props.shoppers === undefined) {
    return <p>Loading Shoppers</p>;
  }

  return (
    <ul>
      <>
        {props.shoppers.map((shopper) => (
          <Shoppers
            key={shopper.id}
            name={shopper.name}
            address={shopper.address}
            phone={shopper.phone}
            email={shopper.email}
            credit_card={shopper.credit_card}
            expiry_date={shopper.expiry_date}
          />
        ))}
      </>
    </ul>
  );
}

export default ShoppersList;
