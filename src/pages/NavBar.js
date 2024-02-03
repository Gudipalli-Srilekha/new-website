import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/Navbar.css";
import ProfileDropdown from '../Dropdown/ProfileDropdown';
import { Button, Select } from 'antd';

function DagNavbar() {
  // State for managing menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu open/close state
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const onClicked = () => {
    localStorage.clear('token');
    window.location.href = '/';
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav id='navbar' className=''>
        <div className='nav-wrapper'>
          {/* Logo */}
          {/* <div className='logo'>
            <Link to='/'>
              <img src={LogoImage} alt='Logo' className='logo-img' />
            </Link>
          </div> */}
          {/* Navbar links */}
          <ul id='menu' className={menuOpen ? 'mobile-menu' : ''}>
            {/* Individual menu items */}
            <li className='logout-btn'>
              <Link to='/Home' onClick={closeMenu} style={{color : '#A88463' }}>
              NEUZY
              </Link>  
            </li>
            <li>
              <Link to='/sports' onClick={closeMenu}>
              Sports
              </Link>
            </li>
            <li>
              <Link to='/health' onClick={closeMenu}>
              Health
              </Link>
            </li>
            <li>
              <Link to='/business' onClick={closeMenu}>
              Business
              </Link>
            </li>
            <li>
              <Link to='/general' onClick={closeMenu}>
              General
              </Link>
            </li>
            <li>
              <Link to='/entertainment' onClick={closeMenu}>
              Entertainment
              </Link>
            </li>
            <li>
            <Select
            placeholder = "Select country"
            allowClear
      style={{
        width: 160,
      }}
      
      options={[
        {
          value: 'India',
          label: 'India',

        },
        {
          value: 'US',
          label: 'US',
        },
      ]}
    />
            </li>
            {/* <li className='logout-btn'>
              <Link to={'/artistregister'}>
                <button>Register as artist</button>
              </Link>
            </li> */}
            <li className='logout-btn'>
              <ProfileDropdown />
            </li>
          </ul>
        </div>
      </nav>
      {/* Menu icon */}
      <div className='menuIcon' onClick={handleToggle}>
        {/* Toggle icon bars */}
        <span className={`Icon-bars ${menuOpen ? 'toggle' : ''}`}></span>
      </div>
      {/* Overlay menu */}
      <div className={`overlay-menu ${menuOpen ? 'open' : ''}`}>
        <ul id='menu'>
          {/* Overlay menu items */}
          <li>
            <Link to='/home' onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/aboutus' onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/shopart' onClick={closeMenu}>
              Shop Art
            </Link>
          </li>
          <li>
            <Link to='/ourartists' onClick={closeMenu}>
              Our Artists
            </Link>
          </li>
          <li className='logout-btn '>
            <button onClick={onClicked}>logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DagNavbar;
