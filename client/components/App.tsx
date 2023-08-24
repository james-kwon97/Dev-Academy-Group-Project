import { useState, useEffect } from 'react'
import { getWelcome, getWeather } from '../apiClient.ts'
import Navbar from './Navbar.tsx'
import SearchBar from './SearchBar.tsx'
import Cocktail from './Cocktail.tsx'
import Weather from './Weather.tsx'

// import Weather from './Weather.tsx'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [cocktail, setCocktail] = useState('')
  const [city, setCity] = useState('')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const weather = getWeather(searchText)
    setCity(weather)
    const cocktail = getCocktail(weather.id) //
    setSearchText('')
  }

  return (
    <>
      <h1>Cloudy with a chance of cocktails🍸🍹</h1>
      <Navbar />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSubmit={handleSubmit}
      />
      <Cocktail cocktail={cocktail} />
      <Weather city={city} />
    </>
  )
}

export default App

// celcius symbol °C
// fahrenheit symbol °F
