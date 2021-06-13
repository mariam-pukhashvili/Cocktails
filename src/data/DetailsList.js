import { Link } from "react-router-dom"
import * as route from '../utils/path'
export const DetailsList = ({ data }) => {
 
    return (
      <div className="row">
        {data.map((item) => {
           
          return ( 
        
            <div className="container mt-5 w-75 justify-content-center" key={item.idDrink}>
            <div className="col-12 detailshead">  <Link to={route.HOME_PATH} ><button className="btn col-md-2 btn-details">BACK HOME</button></Link> </div>
            <div className="col-12 mb-5"> <h3>{item.strDrink} </h3></div>
            <div className="d-flex">
              <div className="col-md-5">
                <img
                    className="card-img-top img-fluid"
                    src={item.strDrinkThumb}
                    alt="cocktail"
                />
              </div>
              <div className="col-md-7 text-left">
                <div className="d-flex details">
                    <p className="dttitle">Name:</p>
                    <p className="dtvalue">{item.strDrink}</p>
                </div>
                <div className="d-flex details">
                    <div className="dttitle">Category:</div>
                    <div className="dtvalue">{item.strCategory}</div>
                </div>
                <div className="d-flex details">
                    <div className="dttitle">Info:</div>
                    <div className="dtvalue">{item.strAlcoholic}</div>
                </div>
                <div className="d-flex details">
                    <div className="dttitle">Glass:</div>
                    <div className="dtvalue">{item.strGlass}</div>
                </div>

                <div className="d-flex details">
                    <div className="dttitle">Instructons:</div>
                    <div className="dtvalue">{item.strInstructions}</div>
                </div>
               
                <div className="d-flex details">
                    <div className="dttitle">Ingredients:</div>
                    <div className="dtvalue">{item.strIngredient1+" "+item.strIngredient2+" "+item.strIngredient3+" "+item.strIngredient4}</div>
                </div>

                
                


                {/* <Link to={`/details/${item.idDrink}`} ><button className="btn col-md-4 btn-details">Details</button></Link> */}
              </div>

            </div>
            </div>
            
          )
        })}
      </div>
    )
  }
  
  export default DetailsList
  