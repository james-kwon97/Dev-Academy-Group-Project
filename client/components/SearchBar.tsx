import { useState } from 'react'
import getWeather from '../apiClient.ts'

export default function CitySearch({
  handleSubmit,
  searchText,
  setSearchText,
}) {
  // const [searchText, setSearchText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   const weather = getWeather(searchText)
  //   setSearchText('')
  // }

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label htmlFor="searchText">Search for a City: </label>
        <input
          className="search-input"
          type="text"
          name="searchText"
          id="searchText"
          value={searchText}
          onChange={handleChange}
        />
        <button className="search-button">Submit</button>
      </form>
    </div>
  )
}
