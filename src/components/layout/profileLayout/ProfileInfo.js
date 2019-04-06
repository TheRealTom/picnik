import React from 'react';
import '../../../Profile.css';
import UserInformation from '../../userInfo/UserInformation';
import NewPassword from '../../userInfo/NewPassword';
import ProfileDelete from '../../userInfo/ProfileDelete';

const ProfileInfo = () =>{
  return(
    <div>
        <UserInformation />
        <NewPassword />
        <ProfileDelete />
    </div>
  )
}


export default ProfileInfo;
