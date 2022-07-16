import React from 'react';
import { getWeekday, formatDate } from './DateFns';

function Forecast({ forecast }) {
  return (
    <>
      {forecast.slice(1).map((data) => (
        <div className='forecast' key={data.date_epoch}>
          <br />
          <br />
          <img src={data.day.condition.icon} alt='icon' />
          <p>Day of the week: {getWeekday(data.date)}</p>
          <p>{formatDate(data.date)}</p>
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
