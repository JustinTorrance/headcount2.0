import React from 'react';
import Card from './Card.js';
import './styles/CardContainer.css';
import PropTypes from 'prop-types';


const CardContainer = ({ findAllMatches, searchedLocation }) => {

  const matches = findAllMatches(searchedLocation)
  const schoolCard = matches.map(match => ( <Card {...match} /> ));
  return(
    <section className='card-container'>
      { schoolCard }
    </section>
  )
}

CardContainer.propTypes = {
  findAllMatches: PropTypes.func.isRequired
}

export default CardContainer;

