
import React ,{useState}from 'react';
import './App.css'
import Marquee from "react-fast-marquee";

function App() {

  const apiKey = '237a82a77015a96fe87149a932b0318f';
  const [weatherData,setWeatherData]= useState([{}]);
  const [city,setCity]= useState("");
  
const getWeather=(event)=>{
  if(event.key ==="Enter"){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(response=>response.json()).then(
      data=>{
      
        setWeatherData(data)
        setCity("")
      }
    )
  }
}

  return (
    
  
    <div className='container'>

      
     <input className='input' onChange={e=>setCity(e.target.value)} value={city} onKeyPress={getWeather} placeholder='Enter City...'/>
      
      {typeof weatherData.main==='undefined' ?(
        <div>
          <Marquee style={{color:"red",fontSize:"800"}} text="text"> Welcome to weather app! Enter in a City to get the weather of.</Marquee>
        </div>
      ):(
        <div className='weather-data'>
          
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}^F</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
          
          
        </div>  
        
      )}

      {weatherData.cod==="404"?(
        <p className='city'>City Not FOund</p>
      ):(<>

      </>)}
         
    </div>
  
  
  )
}

export default App
