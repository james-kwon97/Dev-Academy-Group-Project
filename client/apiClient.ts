import request from 'superagent'
import { Welcome } from '../models/welcome.ts'

const serverURL = '/api/v1'

// *** EXAMPLE ***
export function getWeather(): Promise<Weather> {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}

// direct get route for cocktail api
// get route via the router to call weather
// ***   ***   ***
