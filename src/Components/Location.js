import React, { useState } from 'react';
import '../CSS/Location.css';

function Location({ setRequest }) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState('');

  function onChange(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(input);
  }

  console.log(submitted);

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
        <button onClick={() => setRequest(true)}>Use current location</button>
      </div>
    </div>
  );
}

export default Location;
