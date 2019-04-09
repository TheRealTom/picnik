import React, { Component } from 'react';
import {Row, Col, Container } from 'react-bootstrap';
import BasketList from '../baskets/BasketList';
import { connect } from 'react-redux';
import '../../App.css';

class BasketTable extends Component {
  render(){
    //console.log(this.props);
   const { basket } = this.props;
   /*let basketList = () => {
    return(
      while (row = q->fetch()): 
    )
   }
      
   return(
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
  return{
    basket: state.project.basket
  }
}

export default connect(mapStateToProps)(BasketTable)