import React, { useState } from 'react';
import { getWeekday, formatDate } from './DateFns';
import { raindropIcon, windIcon } from './Icons';
import Tabs from './Tabs';
import '../css/Current.css';

function Current({ current, forecast, location }) {
  // current is only being used for todays temp
  const today = forecast[0];
  const [chosenDateInfo, setChosenDateInfo] = useState(today);
  const [chooseDate, setChooseDate] = useState(false);
  const [isToday, setIsToday] = useState(chosenDateInfo.date); // current day is highlighted on initial render

  function handleClick(date) {
    for (const day in forecast) {
      const forecastDay = forecast[day].date;
      if (date === forecastDay) {
        setChosenDateInfo(forecast[day]);
      }
    }
    setChooseDate(date);
    setIsToday('');
  }

  return (
    <div className='current-main'>
      <div className='current-date'>
        <h1>
          {formatDate(chosenDateInfo.date)} &#8226;{' '}
          {getWeekday(chosenDateInfo.date)}
        </h1>
      </div>
      <div className='current-temp'>
        <img src={chosenDateInfo.day.condition.icon} alt='icon' />

        {/* only show this if the date is today */}
        {today.date === chosenDateInfo.date ? (
          <h1>{Math.round(current.feelslike_f)}&#176;</h1>
        ) : (
          <h1>{Math.round(chosenDateInfo.day.maxtemp_f)}&#176;</h1>
        )}

        <h2>
          {Math.round(chosenDateInfo.day.maxtemp_f)}&#176; /&nbsp;&nbsp;
          {Math.round(chosenDateInfo.day.mintemp_f)}&#176;
        </h2>
        <h3>{chosenDateInfo.day.condition.text}</h3>
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
            <h3>{chosenDateInfo.day.daily_chance_of_rain}%</h3>
          </div>
          <div className='wind'>
            {windIcon}
            <h3>{chosenDateInfo.day.maxwind_mph} mph</h3>
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
