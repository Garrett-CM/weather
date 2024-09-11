import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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


  //hmm cant get value at same time bc it udates the state at the end 
  const updateLocation = (event) => {
    setLocation(event.target.value)
  }

  const getWeather = async () => {
    console.log(`getting weather for ${location}`);
    let weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`);
    let weatherDataJSON = await weatherData.json();
    console.log(weatherDataJSON)
     //fetch weather data from API
    //display weather data on the page
  }



  return (
    <>
      <div>
        <h1>this is the header</h1>
        <p>the count is: {count}</p> 
        <button onClick={handleAdd}> + </button> <button onClick={handleSubtract}> - </button>
      </div>     
      <div>
        <h2>where the weather is gonna be</h2>
        <input type="text" placeholder='enter your city' onChange={updateLocation}/> <button onClick={getWeather}>enter</button>
      </div>
    </>
  )
}

export default App
