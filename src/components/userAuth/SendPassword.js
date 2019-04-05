import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { forgotPass } from '../../store/actions/authActions';

//str�nka pro odesl�n� ztracen�ho hesla
class SendPassword extends Component{
  constructor(props) {
    super(props);
    this.state = {
      forgotPass: ''
    };
  }
//zaps�n� zm�ny
  handleChange = (e) => {
     this.setState({
       [e.target.id]: e.target.value
     })
  }
//p�i submitu
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.forgotPass(this.state);
  }

  render(){
    //vytvo�en� prom�nn� pro chycen� erroru
    const { authError } = this.props;
    //layout
    return(
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="email" onChange={this.handleChange} id="forgotPass" placeholder="Your Email" required/>
            </div>
            <div className="buttons">
                <button type="submit" className="btn btn-primary">Send Email</button>
            </div>
          </form>
          <div className="errorText">
            {authError ? <p>{authError}</p> : null}
          </div>
       </div>
    )
  }
}
//zachycen� states do props
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}
//komunikace s props
const mapDispatchToProps = (dispatch) => {
  return{
    forgotPass: (email) => dispatch(forgotPass(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendPassword);
