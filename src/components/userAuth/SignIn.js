import React, { Component } from 'react';
import Header from '../layout/Header';
//klasika register-TheRealTom
class SignIn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      surname: ''
    };
  }

  handleChange = (e) => {
     this.setState({
       [e.target.id]: e.target.value
     })
   }
   handleSubmit = (e) => {
     e.preventDefault();
     console.log(this.state);
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
            <div className="form-group">
               <input onChange={this.handleChange} type="text"  className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
               <input onChange={this.handleChange} type="text" className="form-control" id="surname" placeholder="Surname" />
            </div>
            <div className ="buttons">
               <button type="submit" className="btn btn-primary">SignUp</button>
            </div>
          </form>
        </div>
    )
  }
}
export default SignIn;
