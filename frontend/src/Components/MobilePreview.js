import React from 'react';
import {
  raindropIcon,
  windIcon,
  temperatureIcon,
  sunIcon,
  moonIcon,
  myInfo,
} from './Icons';
import '../CSS/Card.css';

function MobilePreview(props) {
  return (
    <div className='weather-cards'>
      <div className='card'>
        <div className='current-main'>
          <div className='current-date'>
            <h2>BUFFALO</h2>
            <h3>7 / 20 &#8226; WEDNESDAY</h3>
          </div>
          <div className='current-card'>
            <div className='current-temp'>
              <img
                src='https://cdn.weatherapi.com/weather/64x64/day/113.png'
                alt='icon'
              />

              <h1>93</h1>

              <h2>101&#176; /&nbsp;78&#176;</h2>
              <h3>Sunny</h3>
            </div>

            <div className='precip-wind'>
              <div className='precip'>
                {raindropIcon}
                <h3>0%</h3>
              </div>
              <div className='wind'>
                {windIcon}
                <h3>14.3 mph</h3>
              </div>
            </div>
            <div className='dates'>
              <div className='day'>
                <h3>WED</h3>
                <h2>101&#176;</h2>
              </div>
              <div className='day'>
                <h3>THU</h3>
                <h2>94&#176;</h2>
              </div>
              <div className='day'>
                <h3>FRI</h3>
                <h2>99&#176;</h2>
              </div>
            </div>
          </div>
          <div className='tabs'>
            <span className='tab'>{temperatureIcon}</span>
            <span className='tab inactive'>{sunIcon}</span>
            <span className='tab inactive'>{moonIcon}</span>
            <span className='tab inactive'>{myInfo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobilePreview;
