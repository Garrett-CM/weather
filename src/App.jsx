import { useState } from 'react'
import './App.css'



function App() {

  //header logic
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubtract = () => {
    setCount(count - 1)
  }

  //weather logic
  const apiKey = import.meta.env.VITE_WEATHER_APP_API_KEY; //look at me protecting the info

  const [location, setLocation] = useState(' ')
  const [weather, setWeather] = useState({})


  //hmm cant get value at same time bc it udates the state at the end 
  const updateLocation = (event) => {
    setLocation(event.target.value)
  }

  const getWeather = async () => {
    console.log(`getting weather for ${location}`);
    let weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`);
    let weatherDataJSON = await weatherData.json();
    setWeather(weatherDataJSON)
    console.log(weatherDataJSON)  
    //display weather data on the page could be better but we sprinting 
    let weatherCard = document.querySelector('.weatherCard');
    weatherCard.innerHTML = `
    <h2>${weatherDataJSON.location.name}, ${weatherDataJSON.location.region}</h2>
    <h3>temp: ${weatherDataJSON.current.temp_f} F</h3>
    <h3>condition: ${weatherDataJSON.current.condition.text}</h3>
    `;
  }



  return (
    <>
      <div>
        <h1>this is the header for entertainment</h1>
        <p>the count is: {count}</p> 
        <button onClick={handleAdd}> + </button> <button onClick={handleSubtract}> - </button>
      </div>     

      <div>
        <input type="text" placeholder='enter your city' onChange={updateLocation}/> <button onClick={getWeather}>enter</button>
      </div>

      <div className='weatherCard'>
        
      </div>
    </>
  )
}

export default App
