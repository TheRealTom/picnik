import React from 'react';
import Header from './Header';
import SendPassword from '../userAuth/SendPassword';
import '../../App.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//layout for reseting password - Tom
const ForgotPassword = (props) =>{
  const { auth } = props;
  //redirect, if we were logged in
  if(auth.uid) return (<Redirect to='/profile' />);
  return(
      <div className="App">
        <Header />
        <SendPassword />
        <div className="App-reminder">
          Try to remember it now ;)! - Team Picnik
        </div>
     </div>
  )
}

//gets states to props
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ForgotPassword);
