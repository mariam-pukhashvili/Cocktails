import { useParams } from "react-router-dom";
import { useCallback, useEffect,useState } from 'react'
import { getCocktails } from '../../services'
import { DetailsList } from "../../data/DetailsList";
function DeTailsPage(){

    let { id } = useParams();
    const [cocktail, setCocktail] = useState([])


    const loadCocktails = useCallback(async () => {
        const cocktailslist = await getCocktails()
        const data = cocktailslist.filter((item) =>  
        item.idDrink.includes(id)
      )  
      setCocktail([
        ...cocktail,
        data
      ])
    })
      
      useEffect(() => {
            loadCocktails()        
      }
      , []);
     
    const loadcocktails = (cocktail) => {
       return cocktail.map((item) => {
        return  <DetailsList data={item} />
        })
      }


  return (      
       <div>{loadcocktails(cocktail)}</div>   
     )
   
}

export default DeTailsPage;