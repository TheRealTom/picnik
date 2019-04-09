import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BasketList from '../baskets/BasketList';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class BasketTable extends Component {
  render(){
    //console.log(this.props);
   const { basket } = this.props;

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
    basket: state.firestore.ordered.baskets
  }
}

export default compose(
  connect(mapStateToProps),
  firebaseConnect([
    { collection: 'baskets' }
  ])
)(BasketTable)