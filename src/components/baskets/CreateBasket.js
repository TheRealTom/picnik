import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBasket } from '../../store/actions/basketsActions';

class CreateBasket extends Component{
    state = {
      title: '',
      description: ''
    }
  handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createBasket(this.state);
  }

  render(){
    return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <label htmlFor="title">title</label>
              <input class="form-control" id="title" name="title" onChange={this.handleChange} placeholder="Enter title" />
            </div>
            <div className="form-desc">
              <label htmlFor="description">description</label>
              <textarea class="form-control" id="description" onChange={this.handleChange} placeholder ="Description" />
            </div>
            <div className ="form-button">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createBasket: (project) => dispatch(createBasket(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateBasket);
