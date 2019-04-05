import React from 'react';
import Header from './Header';
import SendPassword from '../userAuth/SendPassword';
import '../../App.css';
//str�nka pro odesl�n� ztracen�ho hesla
const ForgetPassword = () =>{
  return(
      <div className="App">
        <Header />
        <SendPassword />
        <div>
          ( try to remember it now ;)! )
        </div>
     </div>
  )
}
export default ForgetPassword;
