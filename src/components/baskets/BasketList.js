import React from 'react';
import BasketSummary from './BasketSummary'

const BasketList = ({basket}) => {
  return(
    <div>
      { basket  && basket.map(project => {
        return(
          <BasketSummary project={project} key={basket.id} />
        )
      })}
   </div>
  );
 }

export default BasketList
