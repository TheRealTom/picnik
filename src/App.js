import React, { Component } from 'react';
import './App.css';
import SignIn from './components/userAuth/SignIn';
import Login from './components/userAuth/Login';
import AboutUs from './components/layout/AboutUs';
import Terms from './components/layout/Terms';
import Feedback from './components/layout/Feedback';
import ForgotPassword from './components/layout/ForgotPassword';
import NavBar from './components/layout/NavBar';
import Profile from './components/layout/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
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
            <Route path="/about" component={AboutUs} />
            <Route path="/terms" component={Terms} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/profile" component={Profile} />
            <Route path="/forgotPassword" component={ForgotPassword} />
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
