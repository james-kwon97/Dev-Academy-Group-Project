import request from 'superagent'
import { Weather } from '../models/weather.ts'
import { Cocktail } from '../models/cocktail.ts'

const serverURL = '/api/v1/cloudy'

// *** EXAMPLE ***
export async function getWeather(city: string): Promise<Weather> {
  console.log('made it to get weather')
  const response = await request.get(`${serverURL}/weather/${city}`)
  return response.body
}

// //
// export async function getCocktail(
//   city: string,
//   cocktail: string
// ): Promise<Cocktail> {
//   const response = await request.get(`${serverURL}/weather/${city}/${cocktail}`)
//   return response.body
// }

export async function fetchCocktailData(cocktailId: number): Promise<Cocktail> {
  const response = await request.get(`${serverURL}/cocktail/${cocktailId}`)

  return response.body
}

// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

// direct get route for cocktail api
// get route via the router to call weather
// ***   ***   ***
