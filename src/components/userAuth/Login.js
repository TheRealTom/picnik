import React, { Component } from 'react';
import Header from '../layout/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//propojení s databází
import { loggIn } from '../../store/actions/authActions';

//klasika login parametry
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
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
    this.props.loggIn(this.state);
  }

  render(){
    const { auth } = this.props;
    console.log(auth.uid);
//podmínka zda jsme pøihlášení nebo ne
    if (auth.uid){
      return(
      <div>
        <Header />
        <div className='App'>
          <p>Welcome, {auth.uid}!</p>
        </div>
      </div>
    )
    }
    //form s errory
    const { authError } = this.props;
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
            <div className ="buttons">
              <button type="submit" className="btn btn-primary">Login</button>
              <div className = "errorText">
                { authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </form>
          <div>
            <Link to='/forgotPassword'>Forgot your password?</Link>
          </div>
        </div>
    )
  }
}
//vytáhneme z reduceru authError a auth pro ovìøení pøíhlášení
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
//pøetáhnutí props do authAction
const mapDispatchToProps = (dispatch) => {
  return{
    loggIn: (creds) => dispatch(loggIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
