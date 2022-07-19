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

  const tabs = [
    { id: 0, class: 'current', icon: temperatureIcon },
    { id: 1, class: 'sun', icon: sunIcon },
    { id: 2, class: 'moon', icon: moonIcon },
  ];

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
        <div className='tabs'>
          {tabs?.map((tab) => (
            <span
              key={tab.id}
              className={`tab ${card === tab.class ? '' : 'inactive'}`}
              onClick={() => onClick(tab.class)}
            >
              {tab.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Weather;
