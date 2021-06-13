import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from '../pages/homepage'
// import Spinner from './components/spinner'
import * as route from './path'
import Loader from '../components/loader'


const AboutPage = React.lazy(() => import('../pages/aboutpage'));
const DeTailsPage = React.lazy(() => import('../pages/detailspage'));

export const Routes = () => {
  return (
    <>
   
        <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={route.HOME_PATH} exact>
           <Homepage></Homepage> 
         
          </Route>
           <Route path={route.ABOUT_PATH}>
            <AboutPage/>
          </Route>
          <Route path={route.DETAILS_PATH}>
           <DeTailsPage/>
          </Route> 
         
          <Redirect to={route.HOME_PATH}/>
        </Switch>
        </Suspense>
     
    </>
  )
}
