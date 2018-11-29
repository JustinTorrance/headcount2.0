import React from 'react';
import './styles/Card.css';
import PropTypes from 'prop-types';


const Card = ({location, stats}) => {
  const year = Object.keys(stats).map(year => (year))
  const value = Object.values(stats).map(value => (value))
  const yearlyValue = year.map((yearlyValue, i) => {
    return <li className={ value[i] > .5 ? 'green' : 'red'} >{year[i]}: {value[i]}</li>
  })

  return(
    <article className='school-card'>
      <h3>{location}</h3>
        <ul>
          {yearlyValue}
        </ul>
    </article>
  );
}

Card.propTypes = {
  stats: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired
}

export default Card;