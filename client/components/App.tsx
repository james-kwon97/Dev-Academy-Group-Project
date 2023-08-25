import { useState, useEffect } from 'react'
import { getWeather } from '../apiClient.ts'
import SearchBar from './SearchBar.tsx'
import Weather from './Weather.tsx'
import Navbar from './Navbar.tsx'

import { Weather as WeatherType } from '../../models/weather.ts'
import Cocktail from './Cocktail.tsx'

// import Weather from './Weather.tsx'
const dumbyCity = {
  temp: 24,
  feels_like: 22,
  humidity: 9,
  min_temp: 12,
  max_temp: 27,
  wind_speed: 100,
  wind_degrees: 12,
  sunrise: 23,
  sunset: 33,
}

const emptyCity = {
  city_name: '',
  temp: 0,
  feels_like: 0,
  humidity: 0,
  min_temp: 0,
  max_temp: 0,
  wind_speed: 0,
  wind_degrees: 0,
  sunrise: 0,
  sunset: 0,
}

function App() {
  // const [welcomeStatement, setWelcomeStatement] = useState('')

  // useEffect(() => {
  //   getWelcome()
  //     .then((res) => {
  //       setWelcomeStatement(res.statement)
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  const [city, setCity] = useState<WeatherType>(emptyCity)
  const [searchText, setSearchText] = useState('')
  // const [cocktail, setCocktail] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const weatherData = await getWeather(searchText)
    console.log(weatherData)
    setCity({ ...weatherData, city_name: searchText })
    // const cocktail = getCocktail(weather.id)
    // getCocktail(id)...
  }

  return (
    <>
      <Navbar />
      <div className="body">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          handleSubmit={handleSubmit}
        />
        <div className="result-container">
          <Weather city={city} />
          <Cocktail />
          {/* <Cocktail cocktail={cocktail} /> */}
        </div>
      </div>
    </>
  )
}

export default App

// celcius symbol °C
// fahrenheit symbol °F
