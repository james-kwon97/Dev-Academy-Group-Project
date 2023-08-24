import { useState } from 'react'
import getWeather from '../apiClient.ts'

export default function CitySearch() {
  const [searchText, setSearchText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const weather = getWeather(searchText)
    setSearchText('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchText">Search for a City:</label>
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={searchText}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  )
}
