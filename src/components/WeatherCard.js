import React from 'react';

function WeatherCard({ temperature, iconSource, weatherInfo, pressureValue, windSpeed, humidityValue }) {
  const style1 = { display: 'flex', flexDirection: 'column', border: '1px solid white', borderRadius: '8px', padding: '10px', gap: '20px', width: '350px', height: '210px', backgroundColor: 'rgba(255, 255, 255, 0.2)' };
  const style2 = { overflow: 'hidden', display: 'flex', justifyContent: 'center', width: '30px', height: '30px' };
  const style3 = { display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'start', justifyContent: 'space-around', height: '100%', padding: '10px' };
  const style4 = { overflow: 'hidden', display: 'flex', justifyContent: 'center', width: '20px', height: '20px' };
  const style5 = { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' };
  const wh = { width: '100%', height: '100%' };

  return (
    <div style={style1}>
      <div style={{ display: 'flex', gap: '10px' }}>
        {iconSource && <div style={style2}><img src={iconSource} alt="icon" style={wh} /></div>}
        {temperature && <p>{temperature}</p>}
        {weatherInfo && <p>{weatherInfo}</p>}
      </div>
      <div style={style3}>
        {windSpeed && (
          <div style={style5}>
            <div style={style4}><img src="./wind-energy.png" alt="icon" style={wh} /></div>
            <div>{windSpeed}</div>
          </div>
        )}
        {humidityValue && (
          <div style={style5}>
            <div style={style4}><img src="./humidity.png" alt="icon" style={wh} /></div>
            <div>{humidityValue}</div>
          </div>
        )}
        {pressureValue && (
          <div style={style5}>
            <div style={style4}><img src="./barometer.png" alt="icon" style={wh} /></div>
            <div>{pressureValue}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
