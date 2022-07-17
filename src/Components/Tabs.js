import React from 'react';
import { temperatureIcon, sunIcon, moonIcon } from './Icons';

function Tabs(props) {
  return (
    <div className='tabs'>
      <span>{temperatureIcon}</span>
      <span>{sunIcon}</span>
      <span>{moonIcon}</span>
    </div>
  );
}

export default Tabs;
