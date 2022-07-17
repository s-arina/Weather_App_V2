import React from 'react';
import Current from './Current';
import Forecast from './Forecast';

function Weather({ weatherData }) {
  const current = weatherData.current;
  const forecast = weatherData.forecast.forecastday;
  const location = weatherData.location;

  return (
    <div className='weather-cards'>
      <div className='current'>
        <Current current={current} forecast={forecast} location={location} />
        {/* <Forecast forecast={forecast} /> */}
      </div>
    </div>
  );
}

export default Weather;
