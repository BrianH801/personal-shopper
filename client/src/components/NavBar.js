import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul className='nav__container container'>
    <li className='nav__about'>
      <Link to='/about'>About</Link>
    </li>
    <div className='nav__shopper-container'>
      <li className='nav__shoppers-form'>
        <Link to='/shoppersform'>Shoppers Form</Link>
      </li>
      <li className='nav__shoppers'>
        <Link to='/shopperspage'>Shopper Info</Link>
      </li>
      <li className='nav__shoppinglist-form'>
        <Link to='/shoppinglistform'>Shopping List Form</Link>
      </li>
      <li className='nav__shoppinglists'>
        <Link to='/shoppinglistpage'>Shopping List</Link>
      </li>
    </div>
  </ul>
);
export default NavBar;
