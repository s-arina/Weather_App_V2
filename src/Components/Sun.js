import React from 'react';
import '../css/Sun.css';

function Sun({ chosenDateInfo }) {
  const astro = chosenDateInfo.astro;
  const day = chosenDateInfo.day;

  const sunInfo = [
    { id: 0, name: 'Rise', info: astro.sunrise },
    { id: 1, name: 'Set', info: astro.sunset },
    { id: 2, name: 'Humidity', info: `${day.avghumidity}%` },
  ];
  return (
    <>
      <div className='sun-card'>
        <h3>SUN</h3>
        <div className='sun-img'>
          <div className='sun-disc'></div>
        </div>
        <div className='sun-info-container'>
          {sunInfo?.map((sun) => (
            <div className='sun-info' key={sun.id}>
              <h3>{sun.name}</h3>
              <h3>{sun.info}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sun;
