export const CocktailsList = ({ data }) => {
    return (
      <div className="row px-3 cocktail">
        {data.map((item) => {
          return (
            <div className="card col-4 shadow mb-3 p-0" key={item.idDrink}>
              <img
                className="card-img-top img-fluid"
                src={item.strDrinkThumb}
              />
              <div className="cocktailFooter">
              <h3>{item.strDrink} </h3>
              <h6 className="mt-1">{item.strGlass}</h6>
              <p className="mt-1 text-muted">{item.strAlcoholic}</p>
              <button className="btn col-md-4 btn-details">Details</button>
              
              </div>
            </div>
            
          )
        })}
      </div>
    )
  }
  
  export default CocktailsList
  