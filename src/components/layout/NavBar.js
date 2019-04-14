import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginLinks from './LoginLinks.js';
import LogoutLinks from './LogoutLinks.js';
import { connect } from 'react-redux';
//Navigetion bar for everybody - Tom
const NavBar = (props) =>{
  const { auth } = props;
  console.log(auth);
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
       </Nav>
       <Nav>
         {auth.uid ? <LoginLinks /> :<LogoutLinks />}
       </Nav>
     </Navbar.Collapse>
    </Navbar>
  )
}
//gets state from auth
const mapStateProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateProps)(NavBar);
