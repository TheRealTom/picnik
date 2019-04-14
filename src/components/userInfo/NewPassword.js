import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Profile.css';

import { renewPassword } from '../../store/actions/authActions';

//class for new password - Tom
class NewPassword extends Component{
  constructor(props){
    super(props);
    this.state = {
      oldPass: '',
      newPass: '',
      confirmPass: ''
    }
  }

  //change handler
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  //submit
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.newPass === this.state.confirmPass){
      this.props.renewPassword(this.state);
    }
  }

  render(){
    const { authError } = this.props;

/*Version with old password does not work
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
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="password" onChange={this.handleChange} className="form-control" id="newPass" placeholder="New password" required/>
            </div>
            <div className="form-group">
              <input type="password" onChange={this.handleChange} className="form-control" id="confirmPass" placeholder="Confirm password" required/>
            </div>
            <div className="Profile-change">
              <button type="submit" className="btn btn-primary">Change</button>
            </div>
          </form>
          <div className="Profile-errorText">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      <br />
      </div>
    )
  }
}
//gets state to props
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.firebase.authError
  }
}
//gets dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    renewPassword: (newPass) => dispatch(renewPassword(newPass))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
