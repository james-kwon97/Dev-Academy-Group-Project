import { useState } from 'react'
import { getWeather, fetchCocktailData } from '../apiClient.ts'
import SearchBar from './SearchBar.tsx'
import Weather from './Weather.tsx'
import Navbar from './Navbar.tsx'
import { CocktailType } from '../../models/cocktail.ts'

import { Weather as WeatherType } from '../../models/weather.ts'
import Cocktail from './Cocktail.tsx'

// import Weather from './Weather.tsx'
// const dumbyCity = {
//   temp: 24,
//   feels_like: 22,
//   humidity: 9,
//   min_temp: 12,
//   max_temp: 27,
//   wind_speed: 100,
//   wind_degrees: 12,
//   sunrise: 23,
//   sunset: 33,
// }

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
  const [city, setCity] = useState<WeatherType>(emptyCity)
  const [searchText, setSearchText] = useState('')
  const [cocktail, setCocktail] = useState<CocktailType | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const weatherData = await getWeather(searchText)
    setCity({ ...weatherData, city_name: searchText })

    // const cocktail = getCocktail(weather.id)
    // getCocktail(id)...

    let cocktailId: number | undefined = undefined // Initialize with a default value

    const temp = weatherData.temp

    switch (true) {
      case temp > -5 && temp <= 5:
        cocktailId = Math.floor(Math.random() * 5) + 11000
        break
      case temp > 5 && temp <= 10:
        cocktailId = Math.floor(Math.random() * 5) + 11005
        break
      case temp > 10 && temp <= 15:
        cocktailId = Math.floor(Math.random() * 5) + 11010
        break
      case temp > 15 && temp <= 20:
        cocktailId = Math.floor(Math.random() * 5) + 11015
        break
      case temp > 20 && temp <= 25:
        cocktailId = Math.floor(Math.random() * 5) + 11020
        break
      case temp > 25:
        cocktailId = Math.floor(Math.random() * 5) + 11025
        break
    }

    if (cocktailId !== undefined) {
      const cocktailData = await fetchCocktailData(cocktailId)
      console.log(cocktailData)
      setCocktail(cocktailData)
    }
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
          {city != emptyCity ? <Weather city={city} /> : ''}
          {cocktail != null ? <Cocktail cocktail={cocktail} /> : ''}
        </div>
      </div>
    </>
  )
}

export default App
