import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBasket } from '../../store/actions/basketsActions';
import { Redirect } from 'react-router-dom'

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
    this.props.createBasket(this.state)
    this.props.history.push('/baskets');
  }

  render(){
    const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/signin' />

    return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">title</label>
              <input class="form-control" id="title" name="title" onChange={this.handleChange} placeholder="Enter title" required/>
            </div>
            <div className="form-group">
              <label htmlFor="description">description</label>
              <textarea class="form-control" id="description" onChange={this.handleChange} placeholder ="Description" required/>
            </div>
            <div className ="form-button">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createBasket: (project) => dispatch(createBasket(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBasket);
