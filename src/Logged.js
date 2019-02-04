import React, { Component } from 'react';
import fire from './config/Firebase';

class Logged extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
               <h1>mainPage</h1>
               <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Logged;
