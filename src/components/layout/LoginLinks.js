import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions.js'
import { connect } from 'react-redux';


const LoginLinks = (props) =>{
  return(
    <Nav className="mr-auto">
      <Navbar><Link to='/' onClick={props.signOut}>Log Out</Link></Navbar>
      <Navbar><Link to="/profile">Profile</Link></Navbar>
    </Nav>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}


export default connect(null, mapDispatchToProps)(LoginLinks);
