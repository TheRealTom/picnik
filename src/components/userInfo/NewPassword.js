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
    //když se nebude shodovat newPass a confirmPass, tak se to provede, error se mi tu ještì nechce zobrazit :/
    if(this.state.newPass === this.state.confirmPass){
      this.props.renewPassword(this.state);
    }
  }

  render(){
    const { authError } = this.props;

/*VERZE PRO OVÌØENÍ STARÝM HESLEM NEFUNGUJE ZATÍM
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
              <input type="password" onChange={this.handleChange} className="form-control" id="confirmPass" placeholder="New password again" required/>
            </div>
            <div className="Profile-change">
              <button type="submit" className="btn btn-primary">Change</button>
            </div>
          </form>
          <div className="Profile-errorText">
            {authError ? <p>Ahoj</p> : null}
          </div>
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
