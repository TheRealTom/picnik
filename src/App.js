import React, { Component } from 'react';
import './App.css';
import fire from './config/Firebase';
import Logged from './Logged';
import SignIn from './SignIn';

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
      console.log(user);
      if (user) {
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
          <p>
            Here is gonna be hamburger!
          </p>
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
