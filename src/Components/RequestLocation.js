import React from 'react';

function RequestLocation({ setRequest }) {
  return (
    <div className='request-location'>
      <h1>Allow location for weather app?</h1>
      <button onClick={() => setRequest(true)}>YES</button>
    </div>
  );
}

export default RequestLocation;
