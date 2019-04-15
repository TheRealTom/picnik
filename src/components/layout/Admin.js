import React from 'react';
import '../../App.css';

import Notifications from '../adminNots/Notifications';
import NewsletterForm from './adminNotifications/NewsletterForm';
import Charts from './adminNotifications/Charts';
//layout for Admin - Tom
const Admin = () =>{
  return(
      <div className="App">
        <div>
          <Notifications />
          <Charts />
          <NewsletterForm />
        </div>
     </div>
  )
}
export default Admin;
