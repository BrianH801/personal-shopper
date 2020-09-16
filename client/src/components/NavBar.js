import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className='nav'>
    <ul className='nav__container container'>
      <li className='nav__home'>
        <Link to='/'>Home</Link>
      </li>
      <li className='nav__about'>
        <Link to='/about'>About</Link>
      </li>
      <li className='nav__shoppers-form'>
        <Link to='/shoppersform'>Shoppers Form</Link>
      </li>
      <li className='nav__shoppers'>
        <Link to='/shopperspage'>Shopper Info</Link>
      </li>
      <li className='nav__shoppinglist-form'>
        <Link to='/shoppinglistform'>Shopping Form</Link>
      </li>
      <li className='nav__shoppinglist'>
        <Link to='/shoppinglistpage'>Shopping List</Link>
      </li>
    </ul>
  </nav>
);
export default NavBar;
