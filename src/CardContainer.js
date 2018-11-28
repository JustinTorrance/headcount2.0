import React from 'react';
import Card from './Card.js';


const CardContainer = ({ findAllMatches }) => {
  const matches = findAllMatches()
  const schoolCard = matches.map(match => ( <Card {...match} /> ));
  return(
    <div>
      { schoolCard }
    </div>
  )
}


export default CardContainer;

