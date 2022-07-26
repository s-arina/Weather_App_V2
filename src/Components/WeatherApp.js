import '../CSS/WeatherApp.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCards from './WeatherCards';
import MobilePreview from './MobilePreview';
import DateTime from './DateTime';
import Location from './Location';

function WeatherApp() {
  const key = process.env.REACT_APP_WEATHER_API;

  const url = 'https://api.weatherapi.com/v1/';

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [request, setRequest] = useState(false);
  const [permission, setPermission] = useState('');

  // useEffect(() => {
  //   setInterval(function () {
  //     setDate(new Date());
  //   }, 60 * 1000);
  // }, []);

  useEffect(() => {
    // PERMISSIONS API
    // run this FIRST useEffect to set the state before api call
    if (/prompt|denied|^$/gi.test(permission)) {
      locationPermission();
    }
  }, [request, permission]);

  useEffect(() => {
    // api call runs on button confirmation in Location
    // and if permission is granted
    fetchWeatherData();
  }, [lat, long]);

  // api call
  const fetchWeatherData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      setLoading(true);
    });
    try {
      const { data } = await axios.get(
        `${url}forecast.json?key=${key}&q=${lat},${long}&days=3`
      );
      setLoading(false);
      setWeatherData(data);
    } catch (err) {
      setError('Error: Could not retrieve data. Please try again.');
    }
  };

  const locationPermission = () => {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then(function (permissionStatus) {
        setPermission(permissionStatus.state);

        permissionStatus.onchange = function () {
          setPermission(this.state);
        };
      });
  };

  return (
    <div className='weather-app'>
      {/prompt|denied|^$/gi.test(permission) && (
        <Location
          setRequest={setRequest}
          fetchWeatherData={fetchWeatherData}
          permission={permission}
        />
      )}
      {/* <MobilePreview /> */}

      {/* <DateTime date={date} /> */}

      {permission === 'granted' ? (
        loading ? (
          <h3 className='loading-msg'>Fetching data...</h3>
        ) : weatherData?.current && weatherData?.location ? (
          <WeatherCards weatherData={weatherData} />
        ) : (
          <h3 className='loading-msg'>{error}</h3>
        )
      ) : null}
    </div>
  );
}

export default WeatherApp;
