import { Weather as WeatherType } from '../../models/welcome.ts'
import { useEffect, useState } from 'react'
import { getWeather } from '../apiClient.ts'

export default function Weather({ city }) {
  // const [weather, setWeather] = etc
  // useEffect(), try catch
  return (
    <>
      <h2>Name: {city.city_name}</h2>
      <ul>
        <li>Temperature: {city.temp}</li>
        <li>Feels Like: {city.feels_like}</li>
        <li>Humidity: {city.humidity}</li>
        <li>Min Temperature: {city.min_temp}</li>
        <li>Max Temperature: {city.max_temp}</li>
        <li>Wind Speed: {city.wind_speed}</li>
        <li>Wind Degrees: {city.wind_degrees}</li>
        <li>Sunrise time: {city.sunrise}</li>
        <li>Sunset time: {city.sunset}</li>
      </ul>
    </>
  )
}

// Cityname, temp, feels_like, humidity, min_temp, max_temp, wind_speed, wind_degrees, sunrise, sunset
