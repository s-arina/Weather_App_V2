import '../CSS/WeatherApp.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCards from './WeatherCards';
import MobilePreview from './MobilePreview';
import DateTime from './DateTime';

function WeatherApp() {
  const key = process.env.REACT_APP_WEATHER_API;

  const url = 'https://api.weatherapi.com/v1/';

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState(['null']);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // setInterval(function () {
    //   fetchweatherData();
    //   setDate(new Date());
    // }, 60 * 1000);
    fetchWeatherData();
    setDate(new Date());
  }, [lat, long]);

  const fetchWeatherData = async () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    try {
      const { data } = await axios.get(
        `${url}forecast.json?key=${key}&q=${lat},${long}&days=3`
      );
      setLoading(false);
      setWeatherData(data);
    } catch (err) {
      // console.log(err.message || 'Error: Could not retrieve data.');
      // console.log(err.response.data.error.message);
      setError('Error: Could not retrieve data. Please try again.');
    }
  };

  return (
    <div className='weather-app'>
      {/* <MobilePreview /> */}

      {/* <DateTime date={date} /> */}

      {loading ? (
        <h3 className='loading-error'>Fetching data...</h3>
      ) : weatherData?.current && weatherData?.location ? (
        <WeatherCards weatherData={weatherData} />
      ) : (
        <h3>{error}</h3>
      )}
    </div>
  );
}

export default WeatherApp;
