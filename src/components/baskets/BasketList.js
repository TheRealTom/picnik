import React from 'react';
import BasketSummary from './BasketSummary'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Nest for baskets Libor
const BasketList = (props) => {
  const {projects, auth} = props;
  return(
    <div class="col-lg-2 order-2 order-lg-1">
      <div class="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
      { projects  && projects.map(project => {
        if (project.authorId !== auth.uid) return null;
        return(
          <Link to={'/basket/' + project.id} key={project.id}>
              <BasketSummary project={project}/>
            </Link>
        )
      })}
      </div>
    </div>
  );
 }

 const mapStateToProps = (state) => {
  return{
      auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(BasketList)
