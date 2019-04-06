import React from 'react';
import '../../../Profile.css';
import UserInformation from '../../userInfo/UserInformation';
import NewPassword from '../../userInfo/NewPassword';

const ProfileInfo = () =>{
  return(
    <div>
        <UserInformation />
        <NewPassword />
    </div>
  )
}


export default ProfileInfo;
