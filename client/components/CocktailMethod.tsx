export default function CocktailMethod({ drink, handleClose }) {
  return (
    <>
      <div className="method">
        <div className="methodText">
          <button
            className="close"
            onClick={() => {
              handleClose()
            }}
          >
            X
          </button>
          <h2>{drink.strDrink}</h2>
          <p>Glass: {drink.strGlass}</p>
          <ul>
            {Array.from({ length: 15 }, (_, index) => {
              const ingredientKey = `strIngredient${index + 1}`
              const measureKey = `strMeasure${index + 1}`

              if (drink[ingredientKey]) {
                return (
                  <li key={index}>
                    {`${drink[ingredientKey]} - - - - - ${drink[measureKey]}`}
                  </li>
                )
              }

              return null
            })}
          </ul>

          <p>Instructions: {drink.strInstructions}</p>
        </div>
      </div>
    </>
  )
}
