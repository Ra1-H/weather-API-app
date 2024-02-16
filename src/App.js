import './App.css';
import React from 'react';
import { useState } from 'react';
import Search from './components/Search';
import WeatherContainer from './components/WeatherContainer';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cityInfo, setCityInfo] = useState("");
  const [population, setPopulation] = useState("");
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [iconSource, setIconSource] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [humidityValue, setHumidityValue] = useState("");
  const [pressureValue, setPressureValue] = useState("");

  async function fetchData() {
    const requestedURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${searchValue}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`;
  
    try {
      let responseFromAPI = await fetch(requestedURL);
  
      if (!responseFromAPI.ok) {
        throw new Error(`HTTP error! Status: ${responseFromAPI.status}`);
      }
  
      let response = await responseFromAPI.json();
      let mainList = response.list[0];
  
      setCityInfo([`${response.city.name}, ${response.city.country}`]);
  
      const currentDate = new Date(mainList.dt * 1000);
      const formattedDate = currentDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
      setDate(formattedDate);
  
      setTemperature(`${mainList.temp.day}°C`);
      setIconSource(`./${mainList.weather[0].icon}.png`);
      setWeatherInfo([`${mainList.weather[0].main}, ${mainList.weather[0].description}`]);
      setPopulation(`Population: ${response.city.population}`);
      setWindSpeed(`${mainList.speed} m/s`);
      setHumidityValue(`${mainList.humidity} %`);
      setPressureValue(`${mainList.pressure} hPa`);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, e.g., display a message to the user
    }
  }
    
  

  function handleSearchInput(event) {
    setSearchValue(event.target.value);
  }

  function handleSearch() {
    fetchData();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent:"center",
        backgroundImage:`url("./clouds.png")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width:"100vw"
      }}
    >
      <Search 
        onClick={handleSearch} 
        onChange={handleSearchInput}  
        value={searchValue} />

      <WeatherContainer
        cityInfo={cityInfo}
        population={population}
        date={date}
        temperature={temperature}
        iconSource={iconSource}
        weatherInfo={weatherInfo}
        pressureValue={pressureValue}
        windSpeed={windSpeed}
        humidityValue={humidityValue}
      />
    </div>
  );
}

export default App;
