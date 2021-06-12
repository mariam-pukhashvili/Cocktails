import axios from 'axios'

axios.defaults.baseURL = 'https://www.thecocktaildb.com'

export const getCocktails = async () => {
  try {
    const result = await axios.get(
      `/api/json/v1/1/search.php?s=` 
      
    )
    return result.data.drinks
  } catch (error) {
    console.log("myerror",error)
  }
}
