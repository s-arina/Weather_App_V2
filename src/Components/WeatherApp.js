import '../CSS/WeatherApp.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCards from './WeatherCards';
import MobilePreview from './MobilePreview';
import DateTime from './DateTime';
import Landing from './Landing';

function WeatherApp() {
  const apiKey = process.env.REACT_APP_WEATHER_API;

  const url = 'https://api.weatherapi.com/v1/';

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [permission, setPermission] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   setInterval(function () {
  //     setDate(new Date());
  //   }, 60 * 1000);
  // }, []);

  useEffect(() => {
    // permissions api
    if (permission !== 'granted') {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (permissionStatus) {
          setPermission(permissionStatus.state);

          permissionStatus.onchange = function () {
            setPermission(this.state);
          };
        });
    }
  }, [permission]);

  useEffect(() => {
    // api call runs on refresh
    setLoading(true);
    fetchWeatherData();
  }, [lat, long]);

  // api call for 3 day forecast
  const fetchWeatherData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    try {
      const { data } = await axios.get(
        `${url}forecast.json?key=${apiKey}&q=${lat},${long}&days=3`
      );
      setLoading(false);
      setWeatherData(data);
    } catch (err) {
      setError('Error: Could not retrieve data. Please try again.');
    }
  };

  const searchLocation = async (input) => {
    try {
      const { data } = await axios.get(
        `${url}search.json?key=${apiKey}&q=${input}`
      );
      setSearchResults(data);
    } catch (err) {
      console.log(err.message, 'error');
    }
  };

  return (
    <div className='weather-app'>
      {permission !== 'granted' && <Landing permission={permission} />}

      {/* <DateTime date={date} /> */}

      {permission === 'granted' ? (
        loading ? (
          <h3 className='loading-msg'>Fetching data...</h3>
        ) : weatherData?.current && weatherData?.location ? (
          <WeatherCards
            weatherData={weatherData}
            searchLocation={searchLocation}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            setLat={setLat}
            setLong={setLong}
          />
        ) : (
          <h3 className='loading-msg'>{error}</h3>
        )
      ) : null}
    </div>
  );
}

export default WeatherApp;
