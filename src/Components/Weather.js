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
      <div
        className={`card ${
          card === 'current'
            ? 'current'
            : card === 'sun'
            ? 'sun'
            : card === 'moon'
            ? 'moon'
            : ''
        }`}
      >
        {card === 'moon' ? (
          <div className='stars-container'>
            <span id='stars'></span>
            <span id='stars2'></span>
            <span id='stars3'></span>
          </div>
        ) : null}
        <Current
          current={current}
          forecast={forecast}
          location={location}
          card={card}
        />
        {/* - make an array and map out
         */}
        <div className='tabs'>
          <span
            className={`tab ${card === 'current' ? '' : 'inactive'}`}
            onClick={() => onClick('current')}
          >
            {temperatureIcon}
          </span>
          <span
            className={`tab ${card === 'sun' ? '' : 'inactive'}`}
            onClick={() => onClick('sun')}
          >
            {sunIcon}
          </span>
          <span
            className={`tab ${card === 'moon' ? '' : 'inactive'}`}
            onClick={() => onClick('moon')}
          >
            {moonIcon}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
