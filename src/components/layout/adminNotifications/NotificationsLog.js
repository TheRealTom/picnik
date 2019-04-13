import React from 'react';
import moment from 'moment';
import '../../../App.css';
import '../../../Admin.css';

const NotificationsLog = (props) => {
  const { notifications } = props;
  return(
    <div className="Admin-log">
      <div className="Admin-title">
        Logs:
      </div>
      {notifications && notifications.map(item =>{
        return <li key={item.id}>
                <span>{item.user}</span><br />
                <span>{item.content}</span><br />
                <span className="Admin-logTime">{moment(item.time.toDate()).fromNow()}</span>
              </li>
      })}
    </div>
  )
}

export default NotificationsLog;
