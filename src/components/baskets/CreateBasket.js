import React, { Component } from 'react';

class CreateBasket extends Component{
    this.state = {
      title: '',
      description: '',
    };
  }

  handleChange(e) {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
        <div>
          <Header />
          <form>
            <div class="form-group">
               <input value={this.state.title} onChange={this.handleChange} type="text" name="title" class="form-control" id="title1" placeholder="Enter title" />
            </div>
            <div class="form-group">
               <textarea value={this.state.description} onChange={this.handleChange} name="description" class="form-control" id="desc" placeholder ="Description" />
            </div>
            <div className ="buttons">
               <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
    )
  }
}
export default SignIn;
