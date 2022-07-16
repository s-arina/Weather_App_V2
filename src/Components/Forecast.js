import React from 'react';

function Forecast({ forecast }) {
  // info for the next two days
  return (
    <>
      {forecast.slice(1).map((data) => (
        <div className='forecast'>
          <br />
          <br />
          <img src={data.day.condition.icon} alt='icon' />
          <p>{data.date}</p>
          <p>Description: {data.day.condition.text}</p>
          <p>High: {Math.round(data.day.maxtemp_f)} &#8457;</p>
          <p>Low: {Math.round(data.day.mintemp_f)} &#8457;</p>
          <p>Chance of rain: {data.day.daily_chance_of_rain}%</p>
          <p>Precipitation: {data.day.totalprecip_in} in</p>
          <p>Sunrise: {data.astro.sunrise}</p>
          <p>Sunset: {data.astro.sunset}</p>
          <p>Moonrise: {data.astro.moonrise}</p>
          <p>Moonset: {data.astro.moonset}</p>
          <p>Moon phase: {data.astro.moon_phase}</p>
        </div>
      ))}
    </>
  );
}

export default Forecast;
