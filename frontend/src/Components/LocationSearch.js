import React, { useState } from 'react';
import '../CSS/Location.css';

function LocationSearch({
  searchLocation,
  setSearchResults,
  searchResults,
  setLat,
  setLong,
}) {
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

  function handleCoordinates(e, lat, lon) {
    e.preventDefault();
    setLat(lat);
    setLong(lon);
  }

  return (
    <div className='lookup'>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          placeholder='city, state, or zip'
          onChange={(e) => onChange(e)}
        />
      </form>
      {searchResults.length > 0 ? (
        <div className='results'>
          {searchResults.map((res) => (
            <h2 onClick={(e) => handleCoordinates(e, res.lat, res.lon)}>
              {res.name}
            </h2>
          ))}

          <button onClick={() => setSearchResults([])}></button>
        </div>
      ) : null}
    </div>
  );
}

export default LocationSearch;
