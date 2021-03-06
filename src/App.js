import React, { Component } from 'react';
import './App.css';
import SignIn from './components/userAuth/SignIn';
import Login from './components/userAuth/Login';
import AboutUs from './components/layout/AboutUs';
import Terms from './components/layout/Terms';
import ForgotPassword from './components/layout/ForgotPassword';
import NavBar from './components/layout/NavBar';
import Profile from './components/layout/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BasketTable from './components/basketTable/BasketTable';
import BasketDetails from './components/baskets/BasketDetails.js';
import CreateBasket from './components/baskets/CreateBasket';
/* Tom/Libor
* class for routing through app
*/
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
            <Route path="/profile" component={Profile} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/baskets" component={BasketTable} />
            <Route path="/basket/:id" component={BasketDetails} />
            <Route path="/create" component={CreateBasket} />
          </Switch>
        </div>
        <footer className="App-footer">
          <p>
            Made by TheRealTom and Libor for the final exam purposes.
          </p>
        </footer>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
