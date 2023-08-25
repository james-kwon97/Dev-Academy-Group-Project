import { useState } from 'react'

import CocktailMethod from './CocktailMethod.tsx'

export default function Cocktail({ cocktail }) {
  const [methodView, setMethodView] = useState(false)
  const drinkData = cocktail.drinks[0]
  const handleClick = () => {
    setMethodView(true)
  }

  const handleClose = () => {
    setMethodView(false)
  }

  return (
    <>
      <div className="cocktail-container">
        <h2>The best cocktail for the weather: {drinkData.strDrink}</h2>

        <button onClick={handleClick}>View Method</button>

        {methodView ? (
          <CocktailMethod drink={drinkData} handleClose={handleClose} />
        ) : (
          ''
        )}
      </div>
    </>
  )
}
