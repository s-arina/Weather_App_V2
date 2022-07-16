import '../css/WeatherApp.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import DateTime from './DateTime';

function WeatherApp() {
  const key = process.env.REACT_APP_WEATHER_API;
  const url = 'https://api.openweathermap.org/data/2.5';
  const iconUrl = 'https://openweathermap.org/img/w/';

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(function () {
      fetchData();
      setDate(new Date());
    }, 60 * 1000);

    fetchData();
    setDate(new Date());
  }, [lat, long]);

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    try {
      const { data } = await axios.get(
        `${url}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${key}`
      );
      setData(data);
    } catch (err) {
      console.log(err.message || 'Error: Could not retrieve data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='weather-app'>
      <DateTime date={date} />
      {loading && <h1>Getting data...</h1>}
      {data?.main ? <Weather weatherData={data} iconUrl={iconUrl} /> : null}
    </div>
  );
}

export default WeatherApp;
