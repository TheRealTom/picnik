import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Profile.css';

import { renewPassword } from '../../store/actions/authActions';

class NewPassword extends Component{
  constructor(props){
    super(props);
    this.state = {
      oldPass: '',
      newPass: '',
      confirmPass: ''
    }
  }

  //zachyt�v�n� zm�n
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  //submit
  handleSubmit = (e) => {
    e.preventDefault();
    //kdy� se nebude shodovat newPass a confirmPass, tak se to provede, error se mi tu je�t� nechce zobrazit :/
    if(this.state.newPass === this.state.confirmPass){
      this.props.renewPassword(this.state);
    }
  }

  render(){
    const { authError } = this.props;

/*VERZE PRO OV��EN� STAR�M HESLEM NEFUNGUJE ZAT�M
*<form onSubmit={this.handleSubmit}>
*  <div className="form-group">
*      <input type="password" onChange={this.handleChange} id="oldPass" placeholder="Old Password" required/>
*  </div>
*/
    return(
      <div className="Profile-resetPassword">
        <div className="Profile-heading">
          Reset Password
        </div>
        <div>
            <div className="form-group">
              <input type="password" onChange={this.handleChange} id="newPass" placeholder="New password" required/>
            </div>
            <div className="form-group">
              <input type="password" onChange={this.handleChange} id="confirmPass" placeholder="New password again" required/>
            </div>
            <div className="Profile-change">
              <button type="submit">Change(does not work yet)</button>
              <div className="Profile-errorText">
              { authError ? <p>authError</p> : null }
              </div>
            </div>
          </form>
        </div>
      <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.firebase.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renewPassword: (newPass) => dispatch(renewPassword(newPass))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);