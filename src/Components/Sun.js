import React from 'react';

function Sun({ chosenDateInfo }) {
  const astro = chosenDateInfo.astro;
  const day = chosenDateInfo.day;

  return (
    <div className='sun-card'>
      <h1>SUN</h1>
      <p>Rise: {astro.sunrise}</p>
      <p>Set: {astro.sunset}</p>
      <p>Humidity: {day.avghumidity}</p>
    </div>
  );
}

export default Sun;
