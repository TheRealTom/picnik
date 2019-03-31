import React from 'react';
import Header from './Header';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../App.css';

const Profile = (props) => {
  const { auth } = props;
  if(!auth.uid) return (<Redirect to='/signIn' />);
  return(
    <div className="App">
        <Header />
        <div>
          Welcome to your profile! It's just and only yours!
        </div>
     </div>
  )
}

const mapStateProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateProps)(Profile);
