import React, { Component } from 'react'
import BasketList from '../baskets/BasketList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class BasketTable extends Component {
  render(){
    //console.log(this.props);
   const { projects, auth  } = this.props;
   if (!auth.uid) return <Redirect to='/signin' />
    
    return(
      <div className='Container'>
        <div className ="row">
          <div className="col s12 m6">
            <BasketList projects={projects} />
          </div>
        </div>
      </div>
     )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return{
    projects: state.firestore.ordered.baskets,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'baskets'}
  ])  
)(BasketTable)
