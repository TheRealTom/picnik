import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//Navigation bar for Profile.js - Tom
const ProfileNavBar = (props) =>{
  const { profile } = props;
  return(
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey='info'><Link to='/profile/info'>Profile Information</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="newsletter"><Link to='/profile/newsletter'>Newsletter</Link></Nav.Link>
        </Nav.Item>
          {profile.role==="admin" ? <Nav.Item>
                    <Nav.Link eventKey="adminNots"><Link to='/profile/adminStats'>Admin Log</Link></Nav.Link>
                  </Nav.Item> : null}
      </Nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(ProfileNavBar);
