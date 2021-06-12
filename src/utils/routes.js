import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AboutPage from '../pages/aboutpage'
import Homepage from '../pages/homepage'
// import Spinner from './components/spinner'
import * as route from './path'



export const Routes = () => {
  return (
    <>
    
        <Switch>
          <Route path={route.HOME_PATH} exact>
           <Homepage></Homepage> 
         
          </Route>
           <Route path={route.ABOUT_PATH}>
            <AboutPage/>
          </Route> 
         
          <Redirect to={route.HOME_PATH} />
        </Switch>
     
    </>
  )
}
