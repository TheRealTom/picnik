import React from 'react';
import Header from './Header';
import SendPassword from '../userAuth/SendPassword';
import '../../App.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//str�nka pro odesl�n� ztracen�ho hesla
const ForgotPassword = (props) =>{
  const { auth } = props;
  //redirect, kdy� bychom byli p�ihl�en� a sna�ili se dostat na tuhle adresu
  if(auth.uid) return (<Redirect to='/profile' />);
  //layout pro zapomenut� heslo
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
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ForgotPassword);
