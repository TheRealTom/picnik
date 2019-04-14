import React from 'react';
import Header from './Header';
import '../../App.css'
//we could probably use something that Libor use for creating baskets, but that is not our priority now.
const Feedback = () =>{
  return(
      <div className="App-soon">
        <Header />
        <div>
          Comming soon...
        </div>
     </div>
  )
}
export default Feedback;
