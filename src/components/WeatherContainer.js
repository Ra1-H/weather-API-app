import React from 'react'
import WeatherCard from './WeatherCard'
import LocationCard from './LocationCard'

function WeatherContainer({cityInfo,population,date,temperature,iconSource,weatherInfo,pressureValue,windSpeed,humidityValue}) {
  return (
    <div style={{display:'flex',gap:'20px',alignItems:"center",justifyContent:"center"}}>
      
      <LocationCard cityInfo={cityInfo} population={population} date={date} />

      <WeatherCard 
          temperature={temperature} 
          iconSource={iconSource} 
          weatherInfo={weatherInfo} 
          pressureValue={pressureValue}
          windSpeed={windSpeed}
          humidityValue={humidityValue} 
        />


    </div>
  )
}

export default WeatherContainer