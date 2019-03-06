import React, { Component } from 'react';
import Header from '../layout/Header';
import fire from '../../config/Firebase';

class Login extends Component{
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  render(){
    return(
        <div>
          <Header />
          <form>
            <div class="form-group">
               <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
               <div class="form-group">
               <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className ="buttons">
               <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
               <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">SignUp</button>
            </div>
          </form>
        </div>
    )
  }
}
export default Login;
