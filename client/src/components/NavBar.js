import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className='nav__container'>
    <ul className='nav__inner-container'>
      <li className='nav__shoppers'>
        <Link to='/'>ShoppersForm</Link>
      </li>
      <li className='nav__about'>
        <Link to='/About'>About</Link>
      </li>
      <li className='nav-contact-form'>
        <Link to='/contactForm'>Contact</Link>
      </li>
      <li className='nav-resume'>
        <Link to='/Resume'>Resume</Link>
      </li>
    </ul>
  </nav>
);
export default NavBar;
