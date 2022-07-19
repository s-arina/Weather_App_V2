import '../css/WeatherApp.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import DateLocation from './DateLocation';
import RequestLocation from './RequestLocation';

function WeatherApp() {
  // const card = document.getElementsByClassName('current')[0].className;
  // CLASSNAME UNDEFINED AT INITIAL RENDER
  const key = process.env.REACT_APP_WEATHER_API;

  const url = 'http://api.weatherapi.com/v1/';

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [request, setRequest] = useState(false);

  const success = function (position) {
    alert(position.coords.latitude);
    alert(position.coords.longitude);
  };

  const error = function (errorObj) {
    alert(errorObj.code + ': ' + errorObj.message);

    alert('error!!');
  };

  function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      maximumAge: 10000,
    });
  }

  useEffect(() => {
    // setInterval(function () {
    //   fetchweatherData();
    //   setDate(new Date());
    // }, 60 * 1000);
    if (request) {
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
    }

    setDate(new Date());
  }, [lat, long, request]);

  return (
    // <div
    //   className={`weather-app ${
    //     card === 'card current'
    //       ? 'current'
    //       : card === 'card sun'
    //       ? 'sun'
    //       : card === 'card moon'
    //       ? 'moon'
    //       : ''
    //   }`}
    // >
    <div className='weather-app'>
      {/* <button onClick={() => getLocation()}>Get location</button> */}
      {!request ? <RequestLocation setRequest={setRequest} /> : null}
      {/* <DateLocation date={date} weatherData={weatherData} /> */}

      {/* <div className='loading'>
        {!request && loading && <h1>Getting Data...</h1>}
      </div> */}

      {request && weatherData?.current && weatherData?.location ? (
        <Weather weatherData={weatherData} />
      ) : null}
    </div>
  );
}

export default WeatherApp;
