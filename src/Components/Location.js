import React, { useState } from 'react';
import '../CSS/Location.css';

function Location({ setRequest, fetchWeatherData, permission }) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState('');

  function onChange(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(input);
  }

  fetchWeatherData();

  return (
    <div className='landing'>
      <div className='lookup'>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type='text'
            placeholder='city, state, or zip'
            onChange={(e) => onChange(e)}
          />
        </form>
      </div>
      <h3>or</h3>
      <div className='request-location'>
        <button
          onClick={() => {
            setRequest(true);
            fetchWeatherData();
          }}
        >
          Use current location
        </button>
      </div>
      {permission === 'denied' ? (
        <h2 style={{ color: 'blue' }}>
          Please enable location in browser to continue.
        </h2>
      ) : null}
    </div>
  );
}

export default Location;
