import React, { useContext }from 'react';
import Homepage from './Homepage';
import ProfileForm from './ProfileForm';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Matches from './Matches';
import Likes from './Likes';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserContext from "./userContext";
import PrivateRoute from './PrivateRoute' 


function Routes({ handleSignup, handleLogin, handleUpdate }) {
  console.log('Route')
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
        <PrivateRoute exact path="/profile" component={ <ProfileForm handleUpdate={handleUpdate} />}/>
        <Route exact path="/Signup">
          <SignupForm handleSignup={handleSignup} />
        </Route>
        <Route exact path="/login">
          <LoginForm handleLogin={handleLogin} />
        </Route>
        <PrivateRoute exact path="/likes" component={ <Likes/>}/>
        <PrivateRoute exact path="/matches" component={ <Matches/>}/>
        <Redirect to="/" />
      </Switch>
  )
}
export default Routes;