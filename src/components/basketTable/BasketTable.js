import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BasketList from '../baskets/BasketList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class BasketTable extends Component {
  render(){
    //console.log(this.props);
   const { basket, auth  } = this.props;
   if (!auth.uid) return <Redirect to='/signin' />

   /* return(
        <Col >
        <BasketList basket={basket} />
        <br />
      </Col>
      )
    } */
    
    return(
    <Container fluid>
      <BasketList basket={basket} />
    </Container>
     )

  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    baskets: state.firestore.ordered.baskets,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'baskets' }
  ])
)(BasketTable)
