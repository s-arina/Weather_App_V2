import React from 'react';

function Weather({ weatherData, iconUrl }) {
  const main = weatherData.main;
  const desc = weatherData.weather[0];
  const sys = weatherData.sys;

  return (
    <div>
      <h1>
        {weatherData.name}, {sys.country}
      </h1>
      <p>Feels like: {Math.round(main.feels_like)}&#8457;</p>
      <p>Humidity: {main.humidity}</p>
      <p>Pressure: {main.pressure}</p>
      <p>Temp: {Math.round(main.temp)}&#8457;</p>
      <p>Temp Max: {Math.round(main.temp_max)}&#8457;</p>
      <p>Temp Min: {Math.round(main.temp_min)}&#8457;</p>
      <p>Description: {desc.description}</p>
      <p>Surise: {sys.sunrise}</p>
      <p>Sunset: {sys.sunset}</p>

      <img src={`${iconUrl}${desc.icon}.png`} alt='icon' />
    </div>
  );
}

export default Weather;
