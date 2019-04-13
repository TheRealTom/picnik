import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Profile.css';
import '../../App.css';
import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import { updateUser } from '../../store/actions/authActions';

class ProfileDelete extends Component{
  constructor(props){
    super(props);
    this.state = {
      newName: "",
      newSurname: "",
      newEmail: "",
      newTel: "",
      newDate:  "",
      loaded: false,
      redirect: false
    }
  }
//zpoždìní, aby se naèetli všechny props
  componentDidMount(){
    this.setState({
      newName: this.props.profile.name,
      newSurname: this.props.profile.surname,
      newEmail: this.props.auth.email,
      newTel: this.props.profile.tel,
      newDate: this.props.profile.date,
      loaded: true
    });
  }
//hlídá zmìnu v inputech
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      newName: this.props.profile.name,
      newSurname: this.props.profile.surname,
      newEmail: this.props.auth.email,
      newTel: this.props.profile.tel,
      newDate: this.props.profile.date
    })
    //tady toto udìlám ještì foreachem
    if(e.target.children[0].children[0].value !== ""){
      this.setState({newName: e.target.children[0].children[0].value});
    }else{
      this.setState({newName: this.props.profile.name})
    }
    if(e.target.children[1].children[0].value !== "") {
      this.setState({newSurname: e.target.children[1].children[0].value});
    }else{
      this.setState({newSurname: this.props.profile.surname})
    }
    if(e.target.children[4].children[0].value !== "") {
      this.setState({newEmail: e.target.children[4].children[0].value});
    }else{
      this.setState({newEmail: this.props.auth.email})
    }
    if(e.target.children[3].children[0].value !== ""){
      this.setState({newTel: e.target.children[3].children[0].value});
    }else{
      this.setState({newTel: this.props.profile.tel})
    }
    if(e.target.children[2].children[0].value !== ""){
      this.setState({newDate: e.target.children[2].children[0].value});
    }else{
      this.setState({newDate: this.props.profile.date})
    }
    console.log(this.state);
    this.props.updateUser(this.state);
    this.setState({ redirect: true})
  }

  render(){
    const { profile } = this.props;
    if(this.state.redirect === true) return(<Redirect to='/profile/info' />);
    return(
      <div className="Profile-info">
        <div className="Profile-heading">
          Update Your Information
        </div>
        {this.state.loaded && profile.isLoaded ? <div className="">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" onChange={this.handleChange} className="form-control" id="newName" placeholder="Enter Your Name" />
            </div>
            <div className="form-group">
              <input type="text" onChange={this.handleChange} className="form-control" id="newSurname" placeholder="Enter Your Surname" />
            </div>
            <div className="form-group">
              <input type="date" onChange={this.handleChange} className="form-control" id="newDate" />
            </div>
            <div className="form-group">
              <input type="tel" onChange={this.handleChange} className="form-control" id="newTel" placeholder="Enter New Mobile Number"  />
            </div>
            <div className="form-group">
              <input type="email" onChange={this.handleChange} className="form-control" id="newEmail" placeholder="Enter New Email"  />
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Update Profile"/>
            </div>
          </form>
        </div> : <div>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          </div>}
        <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (newData) => dispatch(updateUser(newData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDelete);
