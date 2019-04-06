import React, { Component } from 'react';
import {Row, Col, Container } from 'react-bootstrap';
import BasketList from '../baskets/BasketList';
import { connect } from 'react-redux'

class BasketTable extends Component {
  render(){
    //console.log(this.props);
   const { basket } = this.props;
/*   let basketList = this.state.basket.map(basket => {
    return(
      <Col >
        <BasketList basket={basket} />
        <br />
      </Col>
    )
   })
      
   return(
        <Col >
        <BasketList basket={basket} />
        <br />
      </Col>
      )
    } */
    
    return(
      <Container >
        <Row>
          <Col>
            <BasketList basket={basket} />
          </Col>
        </Row>
      </Container>

     )

  }
}

const mapStateToProps = (state) => {
  return{
    basket: state.project.basket
  }
}

export default connect(mapStateToProps)(BasketTable)