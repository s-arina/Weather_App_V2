import React, { useState } from 'react';
import { GithubIcon, LinkedInIcon, Portfolio } from './Icons';
import '../CSS/Landing.css';

function Landing({ permission }) {
  return (
    <div className='landing'>
      <img
        src='http://cdn.weatherapi.com/weather/64x64/day/113.png'
        alt='icon'
      />
      <h2>weather</h2>
      <h2>s.c.</h2>
      {permission !== 'granted' ? (
        <h3>Please enable location in browser to continue.</h3>
      ) : null}
      <div className='info-card-landing'>
        <div className='icons'>
          {GithubIcon}
          {LinkedInIcon}
          {Portfolio}
        </div>
      </div>
    </div>
  );
}

export default Landing;
