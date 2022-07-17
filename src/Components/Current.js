import React from 'react';
import { getWeekday, formatDate } from './DateFns';
import { Icon } from '@iconify/react';

function Current({ current, forecast, location }) {
  const today = forecast[0];

  //   console.log(today.date, new Date().toISOString().split('T')[0]);
  console.log(today);

  return (
    <div className='current'>
      <div className='current-main'>
        <div className='current-date'>
          {/* <img src={current.condition.icon} alt='icon' /> */}
          <h1>
            {formatDate(today.date)} &#8226; {getWeekday(today.date)}
          </h1>
        </div>
        <div className='current-temp'>
          <h1>{Math.round(current.feelslike_f)}&#176;</h1>
          <h2>
            {Math.round(today.day.maxtemp_f)}&#176; /{' '}
            {Math.round(today.day.mintemp_f)}&#176;
          </h2>
          <h3>{current.condition.text}</h3>
        </div>
        <div className='dates-precip'>
          <div className='dates'>
            {forecast.map((date) => (
              <div className='day'>
                <h3>{getWeekday(date.date).slice(0, 3).toUpperCase()}</h3>
                <h3>{Math.round(date.day.maxtemp_f)}&#176;</h3>
              </div>
            ))}
          </div>

          <div className='precip-wind'>
            <div className='precip'>
              <Icon icon='uil:raindrops' color='white' width='25' height='25' />
              <h3>{today.day.daily_chance_of_rain}%</h3>
            </div>
            <div className='wind'>
              <Icon icon='bx:wind' color='white' width='25' height='25' />
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
        <div className='tabs'>
          <Icon
            icon='fluent:temperature-24-filled'
            color='white'
            width='25'
            height='25'
          />
          <Icon icon='eva:sun-fill' color='white' height='25' width='25' />
          <Icon icon='ci:moon' color='white' height='25' width='25' />
        </div>
      </div>
    </div>
  );
}

export default Current;
