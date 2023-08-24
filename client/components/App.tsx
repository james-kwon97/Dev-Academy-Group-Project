import { useState, useEffect } from 'react'
import { getWeather } from '../apiClient.ts'
import Navbar from './Navbar.tsx'
import SearchBar from './SearchBar.tsx'
import Cocktail from './Cocktail.tsx'
import Weather from './Weather.tsx'

import {
  Weather as WeatherType,
  WeatherWithName,
} from '../../models/weather.ts'

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
  // const [cocktail, setCocktail] = useState('')
  const [city, setCity] = useState<WeatherWithName>(emptyCity)
  const [searchText, setSearchText] = useState('')

  // useEffect(() => {
  //   getWelcome()
  //     .then((res) => {
  //       setWelcomeStatement(res.statement)
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //const weather = getWeather(searchText)
    setCity({ ...dumbyCity, city_name: searchText })
    // const weather = getWeather(searchText)
    // setCity(weather)
    // const cocktail = getCocktail(weather.id)
    setSearchText('')
  }

  return (
    <>
      <h1>Cloudy with a chance of cocktails🍸🍹</h1>
      {/* <Navbar /> */}
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSubmit={handleSubmit}
      />
      {/* <Cocktail cocktail={cocktail} /> */}
      <Weather city={city} />
    </>
  )
}

export default App

// celcius symbol °C
// fahrenheit symbol °F
