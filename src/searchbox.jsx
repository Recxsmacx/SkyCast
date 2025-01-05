import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";

export default function SearchBox({updateInfo}) {
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "06a60366273ae709a826058ab57c78fa";

  let  [city, setCity] = useState("");
  let  [error , setError] =useState(false);


  const getWeatherInfo = async () => {
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      let jsonResponse = await response.json();
      const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);
      let result = {
        city:city,
        temp: kelvinToCelsius(jsonResponse.main.temp),        
        temp_min: kelvinToCelsius(jsonResponse.main.temp_min), 
        temp_max: kelvinToCelsius(jsonResponse.main.temp_max), 
        humidity: jsonResponse.main.humidity,   
        feelsLike: kelvinToCelsius(jsonResponse.main.feels_like),
        weather: jsonResponse.weather[0].description,
  }; 
  console.log(result);
  return result;
    }catch(error){
      throw(error);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo= await getWeatherInfo();
      updateInfo(newInfo);  
    }

    catch{
      setError(true);
    }
   
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>City not found</p>}
        <br /><br />
      </form>
    </div>
  );
}
