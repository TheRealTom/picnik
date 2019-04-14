import React, { Component } from 'react';
import '../../../Admin.css';
import '../../../App.css'
import { connect } from 'react-redux';

import { newsletterTrue } from '../../../store/actions/authActions';
//class for subscribing to newsletter - Tom
class Newsletter extends Component{
  constructor(props){
    super(props);
    this.state = {
      newsletter: false
    }
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
    this.props.newsletterTrue();
  }

  render(){
    const { profile } = this.props;
    if(profile.newsletter === true) return (<div><br />You have already subscribed<br /><br /></div>)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="checkbox" onChange={this.handleChange} id="newsletter" placeholder="checkbox" required/>
        </div>
        <div className="form-group Profile-change">
            <button type="submit" className="btn btn-primary">Subscribe</button>
        </div>
        </form>
      </div>
    )
  }
}
//gets data to props
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}
//gets dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    newsletterTrue: () => dispatch(newsletterTrue())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
