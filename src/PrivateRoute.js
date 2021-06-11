import React, { useContext }from 'react';
import UserContext from "./userContext";
import { Route, Redirect } from 'react-router-dom';

// * Accepts {path: ‘/path’, component: <Component/>}
//  * Returns Route if logged in, or redirects to login route
//  */


function PrivateRoute({ path, component }) {
  const currentUser = useContext(UserContext)
  return (currentUser
    ? <Route exact path={path} >
      {component}
    </Route>
    : <Redirect to='/login'/>)
}
export default PrivateRoute