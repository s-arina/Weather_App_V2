import React, { useState } from 'react';
import Current from './Current';
import { temperatureIcon, sunIcon, moonIcon } from './Icons';

function Weather({ weatherData }) {
  const current = weatherData.current;
  const forecast = weatherData.forecast.forecastday;
  const location = weatherData.location;

  const [card, setCard] = useState('current');

  function onClick(name) {
    setCard(name);
  }

  return (
    <div className='weather-cards'>
      <div className='card'>
        <Current
          current={current}
          forecast={forecast}
          location={location}
          card={card}
        />

        <div className='tabs'>
          <span className='tab active' onClick={() => onClick('current')}>
            {temperatureIcon}
          </span>
          <span className='tab inactive' onClick={() => onClick('sun')}>
            {sunIcon}
          </span>
          <span className='tab inactive' onClick={() => onClick('moon')}>
            {moonIcon}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
