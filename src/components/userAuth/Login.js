import React, { Component } from 'react';
import Header from '../layout/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BasketTable from '../basketTable/BasketTable';
//connection to database
import { loggIn } from '../../store/actions/authActions';


//classic login via email and password - Tom
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
//writes to state when something changed
 handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
//submit for login
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loggIn(this.state);
  }

  render(){
    const { auth, profile } = this.props;
//check if we are logged in
    if (auth.uid){
      return(
      <div>
        <Header />
        <div className='App'>
          <p>Welcome, {profile.name}!</p>
          <BasketTable />
        </div>
      </div>
    )
    }
    //form for login
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
//gets data from states
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
//dispatch to Props
const mapDispatchToProps = (dispatch) => {
  return{
    loggIn: (creds) => dispatch(loggIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
