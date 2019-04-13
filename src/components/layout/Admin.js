import React from 'react';
import '../../App.css';

import Notifications from './adminNotifications/Notifications';
import Newsletter from './adminNotifications/Newsletter';
import Charts from './adminNotifications/Charts';
//stránka pro admina
const Admin = () =>{
  return(
      <div className="App">
        <div>
          <Notifications />
          <Charts />
          <Newsletter />
        </div>
     </div>
  )
}
export default Admin;
