import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { forgotPass } from '../../store/actions/authActions';

//class for sending reset password mail - Tom
class SendPassword extends Component{
  constructor(props) {
    super(props);
    this.state = {
      forgotPass: ''
    };
  }
//change handler
  handleChange = (e) => {
     this.setState({
       [e.target.id]: e.target.value
     })
  }
//submit
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.forgotPass(this.state);
  }

  render(){
    const { authError } = this.props;
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
//data to props
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}
//dispatch to props
const mapDispatchToProps = (dispatch) => {
  return{
    forgotPass: (email) => dispatch(forgotPass(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendPassword);
