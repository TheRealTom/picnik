import React from 'react';
import moment from 'moment';
import { ListGroup } from 'react-bootstrap';
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
        return <ListGroup>
              <ListGroup.Item as='li' key={item.id}>
                <span className="Admin-text">{item.content}</span><br />
                <span className="Admin-text">By:&nbsp;{item.user}</span><br />
                <span className="Admin-logTime">{moment(item.time.toDate()).fromNow()}</span>
              </ListGroup.Item>
              </ListGroup>
      })}
    </div>
  )
}

export default NotificationsLog;
