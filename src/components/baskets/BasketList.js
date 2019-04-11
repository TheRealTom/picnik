import React from 'react';
import BasketSummary from './BasketSummary'
import { Link } from 'react-router-dom'

const BasketList = ({projects}) => {
  return(
    <div>
      { projects  && projects.map(project => {
        return(
          <Link to={'/basket/' + project.id}>
            <BasketSummary project={project} key={projects.id} />
          </Link>
        )
      })}
   </div>
  );
 }

export default BasketList
