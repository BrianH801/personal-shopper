import React from 'react';
import GreenPeppers from './styles/assets/GreenPeppers.png';

function Home() {
  return (
    <>
      <div className='home__container'>
        <div className='home__grocey-store'>Grocery Store</div>
        <div className='home__title'>
          <h1>Personal Shopper Prototype</h1>
        </div>
        <div className='home__peppers'>
          <img src={GreenPeppers} alt='Image of green peppers' />
        </div>
      </div>
    </>
  );
}

export default Home;
