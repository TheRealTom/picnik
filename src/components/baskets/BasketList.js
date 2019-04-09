import React from 'react';
import BasketSummary from './BasketSummary'
import { Link } from 'react-router-dom'

const BasketList = ({basket}) => {
  return(
    <div>
      { basket  && basket.map(project => {
        return(
          <Link to={'/basket/' + project.id}>
            <BasketSummary project={project} key={basket.id} />
          </Link>
        )
      })}
   </div>
  );
 }

export default BasketList
