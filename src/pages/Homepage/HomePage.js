import { useCallback, useEffect,useState, useReducer } from 'react'
import { CocktailsList } from '../../data/CocktailsList'
import useLocalStorage from '../../hooks/useLocalStorage'
import { getCocktails } from '../../services'
import { debounce } from '../../helpers/debounce'
import Loader from '../../components/loader'
import EmptyData from '../../components/emptydata'

const SET_COCKTAILS = 'SET_COCKTAILS'
const SET_FILTER = 'SET_FILTER'
const CLEAR_FILTER = 'CLEAR_FILTER'


const initialState = {
  cocktails: [],
  oldcocktails: [],
  filters: null,
  empty:false
}

const cocktailsReducer = (state, action) => {
  switch (action.type) {
    case SET_COCKTAILS:
      return {
        ...state,
        cocktails: action.payload,
        oldcocktails: [...action.payload],
      }
    case SET_FILTER:
      // eslint-disable-next-line
      const data = state.cocktails.filter((item) =>
        item.strGlass.toLowerCase().includes(action.payload.toLowerCase())
      ) 
      if(data.length===0){ state.empty=true}
      return {
        ...state,
        filter: action.payload,
        cocktails: data,
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
        cocktails: [...state.oldcocktails],
        empty:false
      }
      
    default:
      throw new Error('')
  }
}

function Homepage() {
  const [state, dispatch] = useReducer(cocktailsReducer, initialState)
  const [, setcocktailsStorage] = useLocalStorage('app:cocktails', [])
  const [loading, setLoading] = useState(true);

  const loadCocktails = useCallback(async () => {
    const cocktailslist = await getCocktails()
    
    setcocktailsStorage(cocktailslist)
    dispatch({
      type: SET_COCKTAILS,
      payload: cocktailslist,
    })
    
  }, [setcocktailsStorage])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);  
            loadCocktails()     
        }, 1000);
        return () => { clearTimeout(timer);} 
    }, []);

    useEffect(() => {
    
    setcocktailsStorage(state.cocktails)
   
    }, [state.cocktails, setcocktailsStorage])

  const onSearch = debounce(({ target }) => {
    if (target.value.length > 3) {
        setLoading(true);
        const timer = setTimeout(() => { 
            dispatch({
                type: SET_FILTER,
                payload: target.value,
              }); 

             setLoading(false);
           
        }, 1000);
        return () => { clearTimeout(timer);} 
    } else {
      if (state.filter) { 
        
        dispatch({
          type: CLEAR_FILTER,
        })
      }

    }
   
  })
  const rendercocktails = () => {
    return <CocktailsList data={state.cocktails} />
    
  }
  return (
    <div className="container m-auto w-75 mt-5">
      
      <div className="col-12 mb-4">
        <div className="col-12 shadow search p-5 row m-0">
            <h5> Search Your Favorite Cocktail </h5>
          <input
            type="search"
            className="form-control"
            placeholder="start typing..."
            name="searchTerm"
            onKeyUp={onSearch}
          />
        </div>
        <h3 className="myTitle display-6">Cocktails</h3>
        
      </div>
      <div className="col-12">
      { loading ? <Loader /> : rendercocktails()}
      </div>
      
      <div className="col-12">
      { (!loading && state.empty) ? <EmptyData/> : ''}
      </div>
    </div>
  )
}

export default Homepage
