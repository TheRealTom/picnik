import React, { Component } from 'react';
import '../../Profile.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import NotificationsLog from '../layout/adminNotifications/NotificationsLog';

class Notifications extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { notifications } = this.props;
    return(
      <div>
        <NotificationsLog notifications={notifications} />
      </div>
    )
  };
}


const mapStateProps = (state) => {
  return{
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateProps),
  firestoreConnect([
    { collection: 'notifications', limit: 10, orderBy: ['time', 'desc']}
  ])
)(Notifications);
