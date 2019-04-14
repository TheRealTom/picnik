import React from 'react';
import '../../App.css';

import Notifications from '../adminNots/Notifications';
import Newsletter from './adminNotifications/Newsletter';
import Charts from './adminNotifications/Charts';
//layout for Admin - Tom
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
