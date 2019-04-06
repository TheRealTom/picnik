import React, { Component } from 'react';

class ProfileDelete extends Component{
  constructor(props){
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      show: true
    }
  }

  handleButton = (e) => {
    this.setState({
      //nastavení aby se objevil alert pro COnfirmForm
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleButton}>Delete Profile</button>
        <div id='deleteForm' hidden={this.state.show}>
          Hello World! I am right here!
        </div>
        <br />
      </div>
    )
  }
}


export default ProfileDelete;
