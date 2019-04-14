import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions.js'
import { connect } from 'react-redux';

//When we are logged in, we will see this Navigation bar - Tom/Libor
const LoginLinks = (props) =>{
  return(
    <Nav className="mr-auto">
      <Navbar><Link to="/create">Create basket</Link></Navbar>
      <Navbar><Link to='/' onClick={props.signOut}>Log Out</Link></Navbar>
      <Navbar><Link to="/profile">Profile</Link></Navbar>
    </Nav>
  )
}
//geting sign off dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(LoginLinks);
