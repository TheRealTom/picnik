import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../App.css';

//layouts
import ProfileInfo from './profileLayout/ProfileInfo.js';
import ProfileNewsletter from './profileLayout/ProfileNewsletter.js';
import ProfileNavBar from './profileLayout/ProfileNavBar.js';
import ProfileUpdate from './profileLayout/ProfileUpdate.js';
import Admin from './Admin.js';

//routing on Profile - Tom
const Profile = (props) => {
  const { auth } = props;
  //redirect
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
          <Route path="/profile/newsletter" component={ProfileNewsletter} />
          <Route path="/profile/updateUser" component={ProfileUpdate} />
          <Route path="/profile/adminStats" component={Admin} />
        </Switch>
      </div>
      </BrowserRouter>
  )
}

//gets auth state
const mapStateProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateProps)(Profile);
