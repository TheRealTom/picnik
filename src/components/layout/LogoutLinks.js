import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogoutLinks = () =>{
  return(
    <Nav className="mr-auto">
      <Navbar><Link to="/signin">Sign Up</Link></Navbar>
      <Navbar><Link to="/">Log In</Link></Navbar>
    </Nav>
  )
}
export default LogoutLinks;
