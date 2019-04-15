import React from 'react';
import '../../../App.css';
import '../../../Admin.css';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container, Row, Col } from 'react-bootstrap';

//creating charts - Tom
const Charts = (props) => {
  const { users, notifications } = props;
  var newsletterTrue = 0;
  var newsletterFalse = 0;

  var basketCreate = 0;
  var userCreate = 0;
  var userUpdate = 0;
  var userDelete = 0;
  var something = 0;

  var m = 0;
  var f = 0;
  var s = 0;
  users && users.map(item => {
    if(item.sex === "Female"){
      f += 1;
    }else if (item.sex === "Male") {
      m += 1;
    }else{
      s += 1;
    }
    if(item.newsletter){
      return newsletterTrue +=1;
    }else{
      return newsletterFalse +=1;
    }
  })
  const boys = m;
  const someone = s;
  const girls = f;

  notifications && notifications.map(item =>{
    if(item.content === "created Basket"){
      return basketCreate += 1;
    }else if (item.content === "User was created") {
      return userCreate += 1;
    }else if (item.content === "User was updated") {
      return userUpdate += 1;
    }else if (item.content === "User was deleted") {
      return userDelete += 1;
    }else{
      return something += 1
    }
  })
  const dataSex =  {
    labels: ['Female', 'Male', 'Someone'],
    datasets: [{
        label: '# of Votes',
        data: [girls, boys, someone],
        backgroundColor: [
            'rgba(255, 0, 0, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            'rgba(0, 0, 255, 0.5)'
        ],
        borderColor: [
          'rgba(255, 0, 0, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 0, 255, 1)'
        ],
        borderWidth: 2
    }],
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}

const dataNewsletter =  {
  labels: ['Subscribed', 'Didn\'t subscribed'],
  datasets: [{
      label: '# of Votes',
      data: [newsletterTrue, newsletterFalse],
      backgroundColor: [
          'rgba(255, 0, 0, 0.5)',
          'rgba(0, 255, 0, 0.5)'
      ],
      borderColor: [
        'rgba(255, 0, 0, 1)',
        'rgba(0, 255, 0, 1)'
      ],
      borderWidth: 2
  }],
  options: {
      responsive: true,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
}

const dataNots =  {
  labels: ['Basket created', 'User created', 'User updated', 'User deleted', 'Unhandled'],
  datasets: [{
      label: '# of Votes',
      data: [basketCreate, userCreate, userUpdate, userDelete, something],
      backgroundColor: [
          'rgba(255, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 255, 0.5)',
          'rgba(0, 255, 255, 0.5)',
          'rgba(0, 255, 0, 0.5)'
      ],
      borderColor: [
        'rgba(255, 0, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 255, 0, 1)'
      ],
      borderWidth: 2
  }],
  options: {
      responsive: true,
      title: {
            display: true,
            text: 'Notifications'
        },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
}
  return(
    <div className="Admin-log">
      <div className="Admin-title">Charts</div>
      <br />
      <Container>
        <Row>
          <Col xm={2}><Doughnut data={dataSex} /></Col>
          <Col xm={2}><Doughnut data={dataNewsletter} /></Col>
          <Col xm={2}><Doughnut data={dataNots} /></Col>
        </Row>
      </Container>
    </div>
  )
}
//gets state to props
const mapStateProps = (state) => {
  return{
    users: state.firestore.ordered.users,
    notifications: state.firestore.ordered.notifications
  }
}
//gets notifications, limit is 10, and it is ordered descendetly by time
export default compose(
  connect(mapStateProps),
  firestoreConnect([
    { collection: 'users' },
    { collection: 'notifications'}
  ])
)(Charts);
