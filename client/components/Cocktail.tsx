// export default function Cocktail({ cocktail }) {
//   return (
//     <>
//       <h2>COcktail Name</h2>
//       <img src="" alt="" />
//       <button>View Method</button>
//     </>
//   )
// }

import { Cocktail as CocktailType } from '../../models/cocktail.ts'
import { useEffect, useState } from 'react'
import { getCocktail } from '../apiClient.ts'

export default function Cocktail({ cocktail }) {
  return (
    <>
      <h2>Drink Name: {cocktail.strDrink}</h2>
      <ul>
        <li>Alcoholic?: {cocktail.strAlcoholic}</li>
        <li>Cocktail instructions: {cocktail.strInstructions}</li>
        <img src="" alt="" />
        <button>View Method</button>
      </ul>
    </>
  )
}
