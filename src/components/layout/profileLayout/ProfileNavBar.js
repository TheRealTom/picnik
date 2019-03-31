import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfileNavBar = () =>{
  return(
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey='info'><Link to='/profile/info'>Profile Information</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="baskets"><Link to='/profile/baskets'>Baskets</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="friendlist"><Link to='/profile/friendlist'>Friendlist</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled><Link to='/adminStats' active='false'>AdminStats</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}


export default ProfileNavBar;
