import React from 'react';
import '../../App.css'
//stránka pro odeslání ztraceného hesla
const ForgetPassword = () =>{
  return(
      <div className="App">
        <form>
          <div className="">
            <input type="email" id="forgetEmail" placeholder="Your Email" />
            <input type="submit" id="forgetSubmit" value="Send Email" />
          </div>
        </form>
     </div>
  )
}
export default ForgetPassword;
