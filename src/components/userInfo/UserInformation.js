import React, { Component } from 'react';
import '../../Profile.css';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UserInformation extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { profile, auth } = this.props;
    return(
      <div className="Profile-info">
          <div className="Profile-heading">
            Your given information
          </div>
        <Table>
          <tr>
              <td>
                <div className="Profile-charakters">
                  Name:
                </div>
              </td>
              <td>
                {profile.name}
              </td>
          </tr>
          <tr>
              <td>
                <div className="Profile-charakters">
                  Surname:
                </div>
              </td>
              <td>
                {profile.surname}
              </td>
          </tr>
          <tr>
              <td>
                <div className="Profile-charakters">
                  Date of Birth:
                </div>
              </td>
              <td>
                {profile.date}
              </td>
          </tr>
          <tr>
              <td>
                <div className="Profile-charakters">
                  Mobile number:
                </div>
              </td>
              <td>
                {profile.tel}
              </td>
          </tr>
          <tr>
              <td>
                <div className="Profile-charakters">
                  E-mail:
                </div>
              </td>
              <td>
                {auth.email}
              </td>
          </tr>
        </Table>
          <div className="Profile-change">
              <Link className="btn btn-primary" to="/profile/updateUser">Change</Link>
          </div>
      <br />
      </div>
    )
  };
}


const mapStateProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateProps)(UserInformation);
