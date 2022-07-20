import React from 'react';
import '../css/Sun.css';

function Sun({ chosenDateInfo }) {
  const astro = chosenDateInfo.astro;
  const day = chosenDateInfo.day;
  console.log(chosenDateInfo);
  const sunInfo = [
    { id: 0, name: 'Rise', info: astro.sunrise },
    { id: 1, name: 'Set', info: astro.sunset },
    { id: 2, name: 'Humidity', info: `${day.avghumidity}%` },
  ];
  return (
    <>
      <div className='sun-card'>
        <h3>UV Index: {day.uv}</h3>
        <div className='sun-box'>
          <div className='ray-box'>
            <div className='ray tleft'></div>
            <div className='ray tright'></div>
            <div className='ray center'></div>
            <div className='ray bleft'></div>
            <div className='ray bright'></div>
            <div className='ray tleftS '></div>
            <div className='ray trightS'></div>
            <div className='ray centerS'></div>
            <div className='ray bleftS'></div>
            <div className='ray brightS'></div>
          </div>
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
