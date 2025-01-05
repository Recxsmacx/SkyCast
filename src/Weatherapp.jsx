import { useState } from 'react';
import InfoBox from './infoBox';
import './weatherapp.css';


import SearchBox from './searchbox';


export default function Weatherapp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: " ",
    feelslike: "",
    temp:  "",
    temp_min:  "",
    temp_max:  "",
    humidity:  "",
    weather:  "",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  const backgroundClass =
  weatherInfo.humidity > 80
    ? 'rainy-bg'
    : weatherInfo.temp > 23
    ? 'hot-bg'
    : 'cold-bg';


  return (
    <div className={`weather-app ${backgroundClass}`}>
      <h1>Weather App</h1>
      <SearchBox className="search-box" updateInfo={updateInfo} />
      <InfoBox className="info-box" Info={weatherInfo} />
    </div>
  );
}
