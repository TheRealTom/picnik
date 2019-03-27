import React, { Component } from 'react';
import Header from '../layout/Header';
import { connect } from 'react-redux';
import { loggIn } from '../../store/actions/authActions';

//import fire from '../../config/Firebase';
//klasika login-TheRealTom
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

 handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loggIn(this.state);
  }

  render(){
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
            </div>
          </form>
        </div>
    )
  }
}

const mapDispatchProps = (dispatch) => {
  return{
    loggIn: (auth) => dispatch(loggIn(auth))
  }
}

export default connect(null, mapDispatchProps)(Login);
