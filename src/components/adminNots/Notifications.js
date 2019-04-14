import React, { Component } from 'react';
import '../../Profile.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
//import notifikací do layoutu - Tom
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

//gets state to props
const mapStateProps = (state) => {
  return{
    notifications: state.firestore.ordered.notifications
  }
}
//gets notifications, limit is 10, and it is ordered descendetly by time
export default compose(
  connect(mapStateProps),
  firestoreConnect([
    { collection: 'notifications', limit: 10, orderBy: ['time', 'desc']}
  ])
)(Notifications);
