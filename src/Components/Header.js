// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // 
import image from './logo.jpg'

function Header() {
  return (
    <nav>
      <div>
      <img src={image} width="50px" className='logo' alt='logo'/>
      </div>
      <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/members">Members</Link></li>
      </ul>
       </div>
   
    </nav>
  );
}

export default Header;
