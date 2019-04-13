import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ProfileNavBar = (props) =>{
  const { profile } = props;
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
          {profile.role=="admin" ? <Nav.Item>
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
