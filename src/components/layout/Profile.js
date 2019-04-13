import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../App.css';

//layouty pro Profil
import ProfileBaskets from './profileLayout/ProfileBaskets.js';
import ProfileInfo from './profileLayout/ProfileInfo.js';
import ProfileFriendlist from './profileLayout/ProfileFriendlist.js';
import ProfileNavBar from './profileLayout/ProfileNavBar.js';
import ProfileUpdate from './profileLayout/ProfileUpdate.js';
import Admin from './Admin.js';



const Profile = (props) => {
  const { auth } = props;
  //redirect, když bychom nebyli pøihlášení a snažili se dostat na tuhle adresu
  if(!auth.uid) return (<Redirect to='/signIn' />);
  //tady se øeší veškerý routing ohlednì usera
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
          <Route path="/profile/updateUser" component={ProfileUpdate} />
          <Route path="/profile/adminStats" component={Admin} />
        </Switch>
      </div>
      </BrowserRouter>
  )
}

//získání objektu auth
const mapStateProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateProps)(Profile);
