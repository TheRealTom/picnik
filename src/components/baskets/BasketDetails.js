import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const BasketDetails = (props) => {
  const { basket } = props;
  if (basket){
    return(
      <div className="basket-details">
        <Card border="secondary" style={{height: 'flex', marginTop: "2rem", 
          marginLeft: "1rem", marginRight: "1rem", marginBottom: "1rem"}}>
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>{basket.title}</Card.Title>
            <Card.Text style={{ color: 'black'}}>{basket.desription}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Posted by {basket.authorFirstName} {basket.authorLastName}</small>
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
    basket: basket
  }
} 

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'baskets' }
  ])
)(BasketDetails)
