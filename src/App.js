import React, { Component } from 'react';
import './App.css';
import fire from './config/Firebase';
import Logged from './Logged';
import SignIn from './SignIn';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user){
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-navigator">
         <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Picnik</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#terms">Terms</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
         </Navbar>
        </div>
        <header className="App-header">
          <p>
            <picniK>Let's go Picnik</picniK>!
          </p>
        </header>
        <div className="App-logForm">
          <p>
            <div> {this.state.user ? (<Logged/>) : (<SignIn/>)} </div>
          </p>
        </div>
        <footer className="App-footer">
          <p>
            Made by TheRealTom and Libor for final exam purposes.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
