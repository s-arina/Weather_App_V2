import React from 'react';
import { GithubIcon, LinkedInIcon, Portfolio } from './Icons';
import '../CSS/Info.css';

function Info({ showInfo }) {
  return (
    <div className={`info-card ${showInfo ? 'open' : ''}`}>
      <div className='icons'>
        {GithubIcon}
        {LinkedInIcon}
        {Portfolio}
      </div>
    </div>
  );
}

export default Info;
