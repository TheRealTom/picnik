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

  //zachytávání zmìn
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
    }else{

    }
  }

  render(){
    const { authError } = this.props;
    return(
      <div className="Profile-resetPassword">
        <div className="Profile-heading">
          Reset Password
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="password" onChange={this.handleChange} id="oldPass" placeholder="Old Password" />
            </div>
            <div>
              <input type="password" onChange={this.handleChange} id="newPass" placeholder="New password" />
            </div>
            <div>
              <input type="password" onChange={this.handleChange} id="confirmPass" placeholder="New password again" />
            </div>
            <div className="Profile-change">
              <button type="submit">Change(does not work yet)</button>
              <div className = "Profile-errorText">
                { authError ? <p>{authError}</p> : null}
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
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renewPassword: (newPass) => dispatch(renewPassword(newPass))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
