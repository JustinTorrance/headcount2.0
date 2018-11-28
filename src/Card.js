import React from 'react';

const Card = ({location, stats}) => {
  console.log(location)
  console.log(stats)
  const year = Object.keys(stats).map(year => (year))
  const value = Object.values(stats).map(value => (value))
  const yearlyValue = year.map((yearlyValue, i) => (<li>{year[i]}: {value[i]}</li>))

  return(
    <div>
      <h3>{location}</h3>
        <ul>
          {yearlyValue}
        </ul>
    </div>
  );
}

export default Card;