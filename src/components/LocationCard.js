import React from 'react';


function LocationCard({cityInfo,population,date}) {
  return (
    <div style={{display:'flex',flexDirection:"column",gap:'20px',alignItems:"center",justifyContent:"center",border:"1px solid white",borderRadius:"8px",padding:"10px",width:"350px",height:"210px", backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
        <h1>{cityInfo}</h1>
        <h2>{date}</h2>
        <p>{population}</p>
    </div>
  )
}

export default LocationCard