import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Profile.css';
import '../../App.css';

import { deleteUser } from '../../store/actions/authActions';

class ProfileDelete extends Component{
  constructor(props){
    super(props);
    this.state = {
      newName: '',
      newSurname: '',
      newSurname: '',
      newTel: '',
      newDate: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render(){
    return(
      <div className="Profile-resetPassword">
        <div className="Profile-heading">
          Delete account
        </div>
        <div className="">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" onChange={this.handleChange} className="form-control" id="newName" placeholder="Enter Your Name" required/>
            </div>
            <div className="form-group">
              <input type="text" onChange={this.handleChange} className="form-control" id="newSurname" placeholder="Enter Your Surname" required/>
            </div>
            <div className="form-group">
              <input type="date" onChange={this.handleChange} className="form-control" id="newDate" required/>
            </div>
            <div className="form-group">
              <input type="tel" onChange={this.handleChange} className="form-control" id="newTel" placeholder="Enter New Mobile Number" required/>
            </div>
            <div className="form-group">
              <input type="email" onChange={this.handleChange} className="form-control" id="newEmail" placeholder="Enter New Email" required/>
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" onClick={this.handleSubmit} value="Update Profile"/>
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
