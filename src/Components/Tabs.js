import React from 'react';
import { temperatureIcon, sunIcon, moonIcon } from './Icons';

function Tabs(props) {
  return (
    <div className='tabs'>
      {temperatureIcon}
      {sunIcon}
      {moonIcon}
    </div>
  );
}

export default Tabs;
