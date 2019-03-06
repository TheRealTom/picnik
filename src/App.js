import React, { Component } from 'react';
import './App.css';
import fire from './config/Firebase';
import Logged from './Logged';
import SignIn from './components/userAuth/SignIn';
import Login from './components/userAuth/Login';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
      <BrowserRouter>
      <div className="App">
        <div className="App-navigator">
          <NavBar />
        </div>
        <div className="App-logForm">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
        <footer className="App-footer">
          <p>
            Made by TheRealTom and Libor for final exam purposes.
          </p>
        </footer>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
