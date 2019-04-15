import React from 'react';
import '../../App.css';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import moment from 'moment'

// Basket Details form + function Libor
const BasketDetails = (props) => {
  const { basket ,auth} = props;
    if (!auth.uid) return <Redirect to='/signin' />

  if (basket){
    return(
      <div className="basket-details">
        <Card border="secondary" style={{height: 'flex', marginTop: "2rem", 
          marginLeft: "1rem", marginRight: "1rem", marginBottom: "1rem"}}>
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>{basket.title}</Card.Title>
            <Card.Text style={{ color: 'black'}}>{basket.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Posted by {basket.authorFirstName} {basket.authorLastName} {moment(basket.createdTime.toDate()).calendar()}</small>
          </Card.Footer>
        </Card>
      </div>
    )
  } else {
    return (
      <div className="container">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const baskets = state.firestore.data.baskets;
  const basket = baskets ? baskets[id] : null
  return{
    basket: basket,
    auth: state.firebase.auth
  }
} 

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'baskets' }
  ])
)(BasketDetails)
