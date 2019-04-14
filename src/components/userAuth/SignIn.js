import React, { Component } from 'react';
import Header from '../layout/Header';
import '../../App.css';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

//class for SignIn -TheRealTom
class SignIn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      surname: '',
      tel: '',
      date: '',
      sex: 'Someone'
    };
  }
//change handler
  handleChange = (e) => {
     this.setState({
       [e.target.id]: e.target.value
     })
   }
//changed option handler
handleChangeOption = (e) => {
   this.setState({
     sex: e.target.id
   })
 }
//submit for signIn
   handleSubmit = (e) => {
     e.preventDefault();
     this.props.signIn(this.state);
   }

  render(){
    const { auth, authError } = this.props;
    //redirect
    if(auth.uid) return (<Redirect to='/profile/info' />);
    //form
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
            <div className="form-group ">
              Sex:(if not checked, you will be someone)<br />
              Male<input onChange={this.handleChangeOption} type="radio" className="form-control" name="sex" id="Male" />
            </div>
            <div className="form-group">
              Female<input onChange={this.handleChangeOption} type="radio" className="form-control" name="sex" id="Female"/>
            </div>
            <div className="form-group">
              Someone else<input onChange={this.handleChangeOption} type="radio" className="form-control" name="sex" id="Someone"/>
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
//dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userParams) => dispatch(signIn(userParams))
  }
};
//state to props
const mapStateProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
};

export default connect(mapStateProps, mapDispatchToProps)(SignIn);
