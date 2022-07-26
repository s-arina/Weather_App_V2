import React, { useState } from 'react';
import axios from 'axios';

function LocationSearch(props) {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function onChange(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(input);
  }

  // const searchLocation = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${url}search.json?key=${apiKey}&q=${submitted}`
  //       );
  //       setSearchResults(data);
  //     } catch (err) {
  //       console.log(err.message, 'error');
  //     }
  //   };

  return (
    <div className='lookup'>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type='text'
          placeholder='city, state, or zip'
          onChange={(e) => onChange(e)}
        />
      </form>
    </div>
  );
}

export default LocationSearch;
