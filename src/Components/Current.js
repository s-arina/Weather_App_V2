import React from 'react';
import { getWeekday, formatDate } from './DateFns';

function Current({ current, forecast, location }) {
  const today = forecast[0];

  return (
    <div className='current'>
      <div className='current-main'>
        <img src={current.condition.icon} alt='icon' />
        <p>{formatDate(today.date)}</p>
        <p>Day of the week: {getWeekday(today.date)}</p>
        <p>
          Feels like:{' '}
          {today.date === new Date().toISOString().split('T')[0]
            ? Math.round(current.feelslike_f)
            : null}{' '}
          {/* should only appear if the date is today */}
          &#8457;
        </p>
        <p>Description: {current.condition.text} &#8457;</p>
        <p>High: {Math.round(today.day.maxtemp_f)} &#8457;</p>
        <p>Low: {Math.round(today.day.mintemp_f)} &#8457;</p>
        <p>Chance of rain: {today.day.daily_chance_of_rain}%</p>
        <p>Precipitation: {today.day.totalprecip_in} in</p>
      </div>
      <div className='current-info'>
        <p>Sunrise: {today.astro.sunrise}</p>
        <p>Sunset: {today.astro.sunset}</p>
        <p>Moonrise: {today.astro.moonrise}</p>
        <p>Moonset: {today.astro.moonset}</p>
        <p>Moon phase: {today.astro.moon_phase}</p>
      </div>
    </div>
  );
}

export default Current;
