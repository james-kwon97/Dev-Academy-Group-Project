import { Weather as WeatherType } from '../../models/welcome.ts'
import { useEffect, useState } from 'react'
import { getWeather } from '../apiClient.ts'

export default function Weather({ city }) {
  return (
    <div className="weather-container">
      <h2>{city.city_name}</h2>
      <ul className="nice-list">
        <li>Temperature: {city.temp}°C</li>
        <li>Feels Like: {city.feels_like}°C</li>
        <li>Humidity: {city.humidity}%</li>
        <li>Min Temperature: {city.min_temp}°C</li>
        <li>Max Temperature: {city.max_temp}°C</li>
        <li>Wind Speed: {city.wind_speed}km/h</li>
        <li>Wind Degrees: {city.wind_degrees}°</li>
        <li>Sunrise time: {city.sunrise}</li>
        <li>Sunset time: {city.sunset}</li>
      </ul>
    </div>
  )
}

// Cityname, temp, feels_like, humidity, min_temp, max_temp, wind_speed, wind_degrees, sunrise, sunset
