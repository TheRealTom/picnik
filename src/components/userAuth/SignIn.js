import React, { Component } from 'react';
import Header from '../layout/Header';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
//klasika register-TheRealTom
class SignIn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      surname: '',
      tel: '',
      date: ''
    };
  }
//zapsání zmìny
  handleChange = (e) => {
     this.setState({
       [e.target.id]: e.target.value
     })
   }
//pøi submitu
   handleSubmit = (e) => {
     e.preventDefault();
     this.props.signIn(this.state);
   }

  render(){
    const { auth, authError } = this.props;
    //redirect v pøípadì nepøihlášeného uživatele
    if(auth.uid) return (<Redirect to='/profile/info' />);
    //form s errorem
    return(
        <div>
          <Header />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
               <input onChange={this.handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
               <input onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
               <input onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="Name" required/>
            </div>
            <div className="form-group">
               <input onChange={this.handleChange} type="text" className="form-control" id="surname" placeholder="Surname" required/>
            </div>
            <div className="form-group">
               <input onChange={this.handleChange} type="tel" className="form-control" id="tel" placeholder="Mobile number" pattern="^[0-9\s]$" title="Example: 938393898" required/>
            </div>
            <div className="form-group">
               <input onChange={this.handleChange} type="date" className="form-control" id="date" placeholder="Date of birth" required />
            </div>
            <div className ="buttons">
               <button type="submit" className="btn btn-primary">SignUp</button>
               <div className = "errorText">
                 { authError ? <p>{authError}</p> : null}
               </div>
            </div>
          </form>
        </div>
    )
  }
}
//pøetáhnutí props
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userParams) => dispatch(signIn(userParams))
  }
};
//pøetáhnutí stavu auth a authError z reduceru
const mapStateProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
};

export default connect(mapStateProps, mapDispatchToProps)(SignIn);
