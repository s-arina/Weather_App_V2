import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import WeatherApp from './Components/WeatherApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);

reportWebVitals();
