import React, { useState } from 'react';
import '../CSS/Location.css';

function LocationSearch({ searchLocation, searchResults, setLat, setLong }) {
  // if name matches object[0].name, or name is chosen from list, set Long/Lat
  // else, show a pop up list of locations
  // error: Location not found, please check spelling or be more specific.

  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState('');

  function onChange(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    searchLocation(input);
  }

  function handleCoordinates(lat, lon) {
    setLat(lat);
    setLong(lon);
  }

  console.log(searchResults);

  return (
    <div className='lookup'>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          placeholder='city, state, or zip'
          onChange={(e) => onChange(e)}
        />
      </form>
      <div className='results'>
        {searchResults
          ? searchResults.map((res) => (
              <h2 onClick={() => handleCoordinates(res.lat, res.lon)}>
                {res.name}
              </h2>
            ))
          : null}
        <button></button>
      </div>
    </div>
  );
}

export default LocationSearch;
