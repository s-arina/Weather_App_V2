import React from 'react';

function Moon({ chosenDateInfo }) {
  const astro = chosenDateInfo.astro;
  const day = chosenDateInfo.day;
  console.log(chosenDateInfo);
  return (
    <div className='current-main'>
      <div className='moon'>
        <h1>MOON</h1>
        <p>{astro.moon_phase}</p>
        <p>Rise: {astro.moonrise}</p>
        <p>Set: {astro.moonset}</p>
        <p>Illumination: {astro.moon_illumination}</p>
      </div>
    </div>
  );
}

export default Moon;
