import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Profile.css';

import { deleteUser } from '../../store/actions/authActions';

//delete user class - Tom
class ProfileDelete extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentPassword: '',
      confirmPassword: '',
    }
  }
  //handle change in form
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  //submit
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.currentPassword === this.state.confirmPassword) {
      this.props.deleteUser(this.state);
      return;
    }
  }

  render(){
    return(
      <div className="Profile-resetPassword">
        <div className="Profile-heading">
          Delete account
        </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="password" onChange={this.handleChange} className="form-control" id="currentPassword" placeholder="Your Password" required/>
              </div>
              <div className="form-group">
                <input type="password" onChange={this.handleChange} className="form-control" id="confirmPassword" placeholder="Confirm Your Password" required/>
              </div>
              <div className="Profile-change">
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Delete Profile</button>
              </div>
            </form>
          </div>
        <br />
        </div>
    )
  }
}
//gets state to props
const mapStateToProps = (state) => {
  return {
    authError: state.firebase.authError
  }
}
//gets dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (something) => dispatch(deleteUser(something))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDelete);
