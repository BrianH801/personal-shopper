import React from 'react';
import GreenPeppers from './styles/assets/GreenPeppers.png';

function Home() {
  return (
    <>
      <div className='home__container container'>
        <div className='home__grocey-store'>Grocery Store</div>
        <div className='home__title'>
          <h1>Personal Shopper Prototype</h1>
          <div className='home__peppers container'></div>
        </div>
      </div>
    </>
  );
}

export default Home;
