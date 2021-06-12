import * as route from '../../utils/path'
import { Link } from 'react-router-dom'
function Header(){

    return (
    
    <div className="row shadow white p-3 header">
        <div className=" d-flex m-auto w-75 align-items-center">
            <div className="col-3"> <img src={'logo.svg'} />
            </div>
           <div className="col-1 offset-7">
               <h5>
               <Link to={route.HOME_PATH} >Home</Link>
               </h5></div>
           <div className="col-1 pr-0" >
               <h5>
               <Link to={route.ABOUT_PATH} >About </Link>
               </h5>
           </div>
        </div>
    </div>);

}
export default Header;