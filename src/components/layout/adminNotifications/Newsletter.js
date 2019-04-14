import React, { Component } from 'react';
import '../../../App.css';
import { connect } from 'react-redux';

import { newsletterTrue } from '../../../store/actions/authActions';

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
    //this.props.renewPassword(this.state);
  }

  render(){
    const { profile } = this.props;
    if(profile.newsletter)
      {
        return (<div>You have already subscribed</div>)
      }
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="checkbox" onChange={this.handleChange} id="newsletter" placeholder="checkbox" required/>
        </div>
        <div className="buttons">
            <button type="submit" className="btn btn-primary">Subscribe</button>
        </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newsletterTrue: () => dispatch(newsletterTrue())
  }
}
export default connect(null, mapDispatchToProps)(Newsletter);
