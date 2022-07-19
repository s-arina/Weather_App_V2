import React from 'react';
import '../css/Moon.css';

function Moon({ chosenDateInfo }) {
  // change moon shape depending on phase, check API
  const astro = chosenDateInfo.astro;
  console.log(chosenDateInfo);
  return (
    <>
      <div className='moon-card'>
        <h3>{astro.moon_phase}</h3>
        <div className='moon-img'>
          <div className='disc'></div>
        </div>
        <div className='moon-info'>
          <div className='moonrise'>
            <h3>Rise</h3>
            <h3>{astro.moonrise}</h3>
          </div>
          <div className='moonset'>
            <h3>Set</h3>
            <h3>{astro.moonset}</h3>
          </div>
          <div className='illum'>
            <h3>Illumination</h3>
            <h3>{astro.moon_illumination}%</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moon;
