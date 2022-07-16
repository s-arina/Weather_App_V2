import React from 'react';

function DateLocation({ date, weatherData }) {
  const location = weatherData.location;
  return (
    <div className='date'>
      {location ? (
        <h1>
          {location.name}, {location.region}
        </h1>
      ) : null}
      {date && (
        <h2>
          {new Date()
            .toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })
            .replace(/^(?:00:)?0?/, '')}
        </h2>
      )}
    </div>
  );
}

export default DateLocation;
