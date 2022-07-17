import React, { useState } from 'react';
import { getWeekday, formatDate } from './DateFns';
import { raindropIcon, windIcon } from './Icons';
import Tabs from './Tabs';
import '../css/Current.css';

function Current({ current, forecast, location }) {
  const today = forecast[0];
  const [chooseDate, setChooseDate] = useState(false);
  const [isToday, setIsToday] = useState(today.date);

  function handleClick(date) {
    setChooseDate(date);
    setIsToday('');
  }
  //   console.log(today.date, new Date().toISOString().split('T')[0]);
  //   console.log(today);

  return (
    <div className='current-main'>
      <div className='current-date'>
        <h1>
          {formatDate(today.date)} &#8226; {getWeekday(today.date)}
        </h1>
      </div>
      <div className='current-temp'>
        <img src={current.condition.icon} alt='icon' />
        <h1>{Math.round(current.feelslike_f)}&#176;</h1>
        <h2>
          {Math.round(today.day.maxtemp_f)}&#176; /&nbsp;&nbsp;
          {Math.round(today.day.mintemp_f)}&#176;
        </h2>
        <h3>{current.condition.text}</h3>
      </div>
      <div className='dates-precip'>
        <div className='dates'>
          {forecast.map((date) => (
            <div
              className={`${
                isToday === date.date || chooseDate === date.date
                  ? 'day active'
                  : 'day'
              }`}
              onClick={() => handleClick(date.date)}
            >
              <h3>{getWeekday(date.date).slice(0, 3).toUpperCase()}</h3>
              <h3>{Math.round(date.day.maxtemp_f)}&#176;</h3>
            </div>
          ))}
        </div>

        <div className='precip-wind'>
          <div className='precip'>
            {raindropIcon}
            <h3>{today.day.daily_chance_of_rain}%</h3>
          </div>
          <div className='wind'>
            {windIcon}
            <h3>{today.day.maxwind_mph} mph</h3>
          </div>
        </div>
      </div>

      {/* <div className='current-info'>
        <p>Sunrise: {today.astro.sunrise}</p>
        <p>Sunset: {today.astro.sunset}</p>
        <p>Moonrise: {today.astro.moonrise}</p>
        <p>Moonset: {today.astro.moonset}</p>
        <p>Moon phase: {today.astro.moon_phase}</p>
      </div> */}
      <Tabs />
    </div>
  );
}

export default Current;
