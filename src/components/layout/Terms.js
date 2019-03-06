import React from 'react';
import Header from './Header';
import '../../App.css'

const Terms = () =>{
  return(
      <div>
        <Header />
        <div >
            <img src={require('../photos/meme1.jpg')} alt="meme" width="100%" height="100%" />
        </div>
     </div>
  )
}
export default Terms;
