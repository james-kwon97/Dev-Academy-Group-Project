import request from 'superagent'

import { Weather } from '../models/weather.ts'

const serverURL = '/api/v1/cloudy'

// *** EXAMPLE ***
export async function getWeather(city: string): Promise<Weather> {
  const response = await request.get(`${serverURL}/weather/${city}`)
  return response.body
}

// direct get route for cocktail api
// get route via the router to call weather
// ***   ***   ***
