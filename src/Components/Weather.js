import React from 'react';

function Weather({ weatherData }) {
  const current = weatherData.current;
  const condition = weatherData.current.condition;
  const forecast = weatherData.forecast.forecastday;
  const location = weatherData.location;

  return (
    <div>
      <h1>
        {location.name}, {location.region}
      </h1>
      <p>Feels like: {Math.round(current.feelslike_f)} &#8457;</p>
      <p>Humidity: {current.humidity}%</p>
      {forecast.map((data) => (
        <div className='forecast'>
          <p>{data.date}</p>
          <img src={data.day.condition.icon} alt='icon' />
          <p>Description: {data.day.condition.text}</p>
          <p>High: {data.day.maxtemp_f}</p>
          <p>Low: {data.day.mintemp_f}</p>
          <p>Chance of rain: {data.day.daily_chance_of_rain}%</p>
          <p>Precipitation: {data.day.totalprecip_in} in</p>
        </div>
      ))}
    </div>
  );
}

export default Weather;
