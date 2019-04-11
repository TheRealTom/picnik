import React, { Component } from 'react';
import Header from '../layout/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BasketTable from '../basketTable/BasketTable';
//propojen� s datab�z�
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
//zachyt�v�n� zm�n
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
    const { auth, profile } = this.props;
//podm�nka zda jsme p�ihl�en� nebo ne
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
//vyt�hneme z reduceru authError a auth pro ov��en� p��hl�en�
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
//p�et�hnut� props do authAction
const mapDispatchToProps = (dispatch) => {
  return{
    loggIn: (creds) => dispatch(loggIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
