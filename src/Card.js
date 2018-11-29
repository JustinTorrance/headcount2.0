import React from 'react';
import './styles/Card.css'


const Card = ({location, stats}) => {
  console.log(location)
  console.log(stats)
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

export default Card;