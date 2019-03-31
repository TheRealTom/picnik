import React from 'react';
import Header from './Header';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../App.css';
import ProfileBaskets from './profileLayout/ProfileBaskets.js';
import ProfileInfo from './profileLayout/ProfileInfo.js';
import ProfileFriendlist from './profileLayout/ProfileFriendlist.js';
import ProfileNavBar from './profileLayout/ProfileNavBar.js';



const Profile = (props) => {
  const { auth } = props;
  if(!auth.uid) return (<Redirect to='/signIn' />);
  return(
    <BrowserRouter>
    <div className="App">
        <div className="App-profile">
          Welcome to your profile! It's just and only yours!
        </div>
        <ProfileNavBar />
        <Switch>
          <Route exact path="/profile/info" component={ProfileInfo} />
          <Route path="/profile/friendlist" component={ProfileFriendlist} />
          <Route path="/profile/baskets" component={ProfileBaskets} />
        </Switch>
     </div>
     </BrowserRouter>
  )
}

const mapStateProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateProps)(Profile);
