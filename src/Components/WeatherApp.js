import '../css/WeatherApp.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import DateLocation from './DateLocation';

function WeatherApp() {
  const key = process.env.REACT_APP_WEATHER_API;

  const url = 'http://api.weatherapi.com/v1/';

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setInterval(function () {
    //   fetchweatherData();
    //   setDate(new Date());
    // }, 60 * 1000);

    const fetchWeatherData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      try {
        const { data } = await axios.get(
          `${url}forecast.json?key=${key}&q=${lat},${long}&days=3`
        );
        setWeatherData(data);
      } catch (err) {
        console.log(err.message || 'Error: Could not retrieve weatherData.');
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();
    setDate(new Date());
  }, [lat, long]);

  return (
    <div className='weather-app'>
      <DateLocation date={date} weatherData={weatherData} />
      {loading && <h1>Getting Data...</h1>}

      {weatherData?.current && weatherData?.location ? (
        <Weather weatherData={weatherData} />
      ) : null}
    </div>
  );
}

export default WeatherApp;
