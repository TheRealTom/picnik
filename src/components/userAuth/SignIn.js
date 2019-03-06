import React, { Component } from 'react';
import Header from '../layout/Header';

class SignIn extends Component{
  state = {

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
            <div class="form-group">
               <input value={this.state.name} onChange={this.handleChange} type="text" name="userName" class="form-control" id="inputName" placeholder="Name" />
            </div>
            <div class="form-group">
               <input value={this.state.surname} onChange={this.handleChange} type="text" name="userSurname" class="form-control" id="inputSurname" placeholder="Surname" />
            </div>
            <div className ="buttons">
               <button type="submit" onClick={this.login} class="btn btn-primary">SignUp</button>
               <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">SignUp</button>
            </div>
          </form>
        </div>
    )
  }
}
export default SignIn;
