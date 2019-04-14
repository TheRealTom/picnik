import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Profile.css';
import '../../App.css';
import { Redirect } from 'react-router-dom'
//import  Spinner from 'react-bootstrap/Spinner'

import { updateUser } from '../../store/actions/authActions';
//update user class - TOm
class ProfileChange extends Component{
  constructor(props){
    super(props);
    this.state = {
      newName: "",
      newSurname: "",
      newEmail: "",
      newTel: "",
      newDate:  "",
      newSex: "",
      loaded: false,
      redirect: false
    }
  }
//zpo�d�n�, aby se na�etli v�echny props
  componentDidMount(){
    this.setState({
      newName: this.props.profile.name,
      newSurname: this.props.profile.surname,
      newEmail: this.props.auth.email,
      newTel: this.props.profile.tel,
      newDate: this.props.profile.date,
//      newSex: this.props.profile.sex,
      loaded: true
    });
  }
//hl�d� zm�nu v inputech
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  // // //RADIO BUTTONS
  // // it is not working properly
  // handleChangeOption = (e) => {
  //    this.setState({
  //      newSex: e.target.id
  //    })
  // }
  // <div className="form-group ">
  //   Sex:(if not checked, you will be someone)<br />
  //   Male<input onChange={this.handleChangeOption} type="radio" className="form-control" name="sex" id="Male" />
  // </div>
  // <div className="form-group">
  //   Female<input onChange={this.handleChangeOption} type="radio" className="form-control" name="sex" id="Female"/>
  // </div>
  // <div className="form-group">
  //   Someone else<input onChange={this.handleChangeOption} type="radio" className="form-control" name="sex" id="Someone"/>
  // </div>

//submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      newName: this.props.profile.name,
      newSurname: this.props.profile.surname,
      newEmail: this.props.auth.email,
      newTel: this.props.profile.tel,
      newDate: this.props.profile.date
    })
    //It could be done by foreach
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
    this.props.updateUser(this.state);
    this.setState({ redirect: true})
  }

  render(){
    const { profile } = this.props;
    //redirect
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
              <input type="tel" onChange={this.handleChange} className="form-control" id="newTel" placeholder="Enter New Mobile Number" pattern="[+]?[()/0-9. -]{9,}$" title="Example: 123456789"/>
            </div>
            <div className="form-group">
              <input type="email" onChange={this.handleChange} className="form-control" id="newEmail" placeholder="Enter New Email"  />
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Update Profile"/>
            </div>
          </form>
        </div> : <div>

          </div>}
        <br />
      </div>
    )
  }
}
//gets state to props
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
//gets dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (newData) => dispatch(updateUser(newData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChange);
