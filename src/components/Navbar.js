import React from 'react';
import './Navbar.css'; // You can create this CSS file for styling
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering &Technology</div>
      <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
        <Dropdown.Item href="#/action-2">About</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Services</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Contact</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <ul className="navbar-links">
      
        <li><a href="/" className='navbar-links-item'>Home</a></li>
        <li><a href="/" className='navbar-links-item'>About</a></li>
        <li><a href="/" className='navbar-links-item'>Services</a></li>
        <li><a href="/" className='navbar-links-item'>Contact</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
