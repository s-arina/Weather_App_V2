import React from 'react';

function Current({ current, forecast, location }) {
  // feelsLike should only appear if the date === new Date();
  // leftmost should always be the current

  const today = forecast[0];
  console.log(today);
  return (
    <div className='today'>
      <h1>
        {location.name}, {location.region}
      </h1>
      <img src={current.condition.icon} alt='icon' />
      <p>{today.date}</p>
      <p>Feels like: {Math.round(current.feelslike_f)} &#8457;</p>
      <p>Description: {current.condition.text} &#8457;</p>
      <p>High: {Math.round(today.day.maxtemp_f)} &#8457;</p>
      <p>Low: {Math.round(today.day.mintemp_f)} &#8457;</p>
      <p>Chance of rain: {today.day.daily_chance_of_rain}%</p>
      <p>Precipitation: {today.day.totalprecip_in} in</p>
      <p>Sunrise: {today.astro.sunrise}</p>
      <p>Sunset: {today.astro.sunset}</p>
      <p>Moonrise: {today.astro.moonrise}</p>
      <p>Moonset: {today.astro.moonset}</p>
      <p>Moon phase: {today.astro.moon_phase}</p>
    </div>
  );
}

export default Current;
