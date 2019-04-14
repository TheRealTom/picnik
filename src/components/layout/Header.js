import React from 'react';
//layout for header - Tom/Libor

const Header = () =>{
  return(
    <header className="App-header">
      <p>
        <img src={require('../photos/logo.png')} alt="logo" width="50" height="50" />
        Picnik
      </p>
    </header>
  )
}
export default Header;
