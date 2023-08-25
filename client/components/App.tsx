import { useState, useEffect } from 'react'
import { getWeather } from '../apiClient.ts'
import SearchBar from './SearchBar.tsx'
import Weather from './Weather.tsx'
import Navbar from './Navbar.tsx'
import { CocktailType } from '../../models/cocktail.ts'

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
  const [cocktail, setCocktail] = useState<CocktailType | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const weatherData = await getWeather(searchText)
    console.log(weatherData)
    setCity({ ...weatherData, city_name: searchText })
    setCocktail(cocktailTest)
    // const cocktail = getCocktail(weather.id)
    // getCocktail(id)...
  }
  const cocktailTest: CocktailType = {
    drinks: [
      {
        idDrink: '11007',
        strDrink: 'Margarita',
        strDrinkAlternate: null,
        strTags: 'IBA,ContemporaryClassic',
        strVideo: null,
        strCategory: 'Ordinary Drink',
        strIBA: 'Contemporary Classics',
        strAlcoholic: 'Alcoholic',
        strGlass: 'Cocktail glass',
        strInstructions:
          'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
        strInstructionsES: null,
        strInstructionsDE:
          'Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.',
        strInstructionsFR: null,
        strInstructionsIT:
          'Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.',
        'strInstructionsZH-HANS': null,
        'strInstructionsZH-HANT': null,
        strDrinkThumb:
          'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
        strIngredient1: 'Tequila',
        strIngredient2: 'Triple sec',
        strIngredient3: 'Lime juice',
        strIngredient4: 'Salt',
        strIngredient5: null,
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: '1 1/2 oz ',
        strMeasure2: '1/2 oz ',
        strMeasure3: '1 oz ',
        strMeasure4: null,
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource:
          'https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg',
        strImageAttribution: 'Cocktailmarler',
        strCreativeCommonsConfirmed: 'Yes',
        dateModified: '2015-08-18 14:42:59',
      },
    ],
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

// celcius symbol °C
// fahrenheit symbol °F
