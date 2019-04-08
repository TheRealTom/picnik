import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Profile.css';

import { deleteUser } from '../../store/actions/authActions';

class ProfileDelete extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentPassword: '',
      confirmPassword: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

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

const mapStateToProps = (state) => {
  return {
    authError: state.firebase.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (something) => dispatch(deleteUser(something))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDelete);
