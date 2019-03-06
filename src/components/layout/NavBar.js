import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginLinks from './LoginLinks.js';
import LogoutLinks from './LogoutLinks.js';

const NavBar = () =>{
  return(
    <Navbar collapseOnSelect expand="lg" bg="light">
     <Navbar.Brand>
        <Link to="/">Picnik</Link>
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="mr-auto">
         <Navbar><Link to="/about">About Us</Link></Navbar>
         <Navbar><Link to="/terms">Terms</Link></Navbar>
         <Navbar><Link to="/feedback">Feedback</Link></Navbar>
       </Nav>
       <Nav>
         <LoginLinks />
         <LogoutLinks />
       </Nav>
     </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar;
