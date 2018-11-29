import React from 'react';
import Card from './Card.js';
import './styles/CardContainer.css'


const CardContainer = ({ findAllMatches }) => {
  const matches = findAllMatches()
  const schoolCard = matches.map(match => ( <Card {...match} /> ));
  return(
    <section className='card-container'>
      { schoolCard }
    </section>
  )
}


export default CardContainer;

