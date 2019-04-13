import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import BasketList from '../baskets/BasketList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Info from './info'

class BasketTable extends Component {
  render(){
    //console.log(this.props);
   const { projects, auth, notifications  } = this.props;
   if (!auth.uid) return <Redirect to='/signin' />
    
    return(
      <Container>
        <Row>
          <Col>
            <BasketList projects={projects} />
          </Col>
          <Col>
            <Info notifications={notifications}/>
          </Col>
        </Row>
    </Container>
     )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return{
    projects: state.firestore.ordered.baskets,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'baskets'},
    { collection: 'notifications', limit: 3}
  ])  
)(BasketTable)
