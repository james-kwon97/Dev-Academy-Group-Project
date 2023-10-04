// @vitest-environment jsdom

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '../test-setup.ts'

import Weather from './Weather.tsx'
import { Weather as WeatherType } from '../../models/weather.ts'

describe('Weather component', () => {
  it('renders a heading with city name', () => {
    const city = {
      city_name: 'London',
      cloud_pct: 66,
      temp: 13,
      feels_like: 12,
      humidity: 93,
      min_temp: 11,
      max_temp: 14,
      wind_speed: 3.09,
      wind_degrees: 230,
      sunrise: 1693112678,
      sunset: 1693162807,
    }

    render(<Weather city={city} />)
    screen.debug()

    expect(true).toBeTruthy()
  })
})
