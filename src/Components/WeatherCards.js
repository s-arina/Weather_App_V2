import React, { useState } from 'react';
import Current from './Current';
import { temperatureIcon, sunIcon, moonIcon, myInfo } from './Icons';
import Info from './Info';
import '../css/index.css';
import '../css/root.css';
import '../css/Stars.css';

function WeatherCards({ weatherData }) {
  const current = weatherData.current;
  const forecast = weatherData.forecast.forecastday;
  const location = weatherData.location;

  const [card, setCard] = useState('current');
  const [showInfo, setShowInfo] = useState(false);

  function onClick(name) {
    setCard(name);
    if (card !== name) {
      setShowInfo(false);
    }
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
          setShowInfo={setShowInfo}
        />
        <div className='tabs'>
          <Info showInfo={showInfo} />
          {tabs?.map((tab) => (
            <span
              key={tab.id}
              className={`tab ${card === tab.class ? '' : 'inactive'}`}
              onClick={() => onClick(tab.class)}
            >
              {tab.icon}
            </span>
          ))}
          <span
            id='info'
            className={`tab ${showInfo ? '' : 'inactive'}`}
            onClick={() => setShowInfo(!showInfo)}
          >
            {myInfo}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCards;
