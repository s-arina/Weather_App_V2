import React from 'react';
import '../CSS/Moon.css';

function Moon({ chosenDateInfo }) {
  const astro = chosenDateInfo.astro;

  const moonInfo = [
    { id: 0, name: 'Rise', info: astro.moonrise },
    { id: 1, name: 'Set', info: astro.moonset },
    { id: 2, name: 'Illumination', info: `${astro.moon_illumination}%` },
  ];
  return (
    <>
      <div className='moon-card'>
        <h3>{astro.moon_phase}</h3>
        <div className='moon-img'>
          <div className='moon-disc'></div>
        </div>
        <div className='moon-info-container'>
          {moonInfo?.map((moon) => (
            <div className='moon-info' key={moon.id}>
              <h3>{moon.name}</h3>
              <h3>{moon.info}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Moon;
