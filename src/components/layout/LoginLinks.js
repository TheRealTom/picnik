import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LoginLinks = () =>{
  return(
    <Nav className="mr-auto">
      <Navbar><Link to="/done">Log Out</Link></Navbar>
      <Navbar><Link to="/profile">Profile</Link></Navbar>
    </Nav>
  )
}
export default LoginLinks;
