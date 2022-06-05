import {useState} from 'react'
import axios from 'axios'
import './index.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=72f167b8e0bc363f54f7afd688040025`;



  const searchLocation = (e) => {
    console.log('funciona?')
    if(e.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    console.log('funciona?')
  }

  

  return (
    <div className={ data.rain ? 'app app:before.bg_rain' : 'app app:before.bg_sunset'  }>
      <div className="search">
        <input 
        value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text" 
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round(data.main.temp)}°F</h1> : null}
          </div>
          <div className="description">
          {data.weather ? 
              <p className='bold'>{data.weather[0].main}</p>
             : null
            }
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? 
              <p className='bold'>{Math.round(data.main.feels_like)}°F</p>
             : null
            }
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? 
              <p className='bold'>{Math.round(data.main.humidity)}%</p>
             : null
            }
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? 
              <p className='bold'>{Math.round(data.wind.speed)}MPH</p>
             : null
            }
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
