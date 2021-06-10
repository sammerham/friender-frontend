import React from 'react';
import Homepage from './Homepage';
import ProfileForm from './ProfileForm';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Matches from './Matches';
import Likes from './Likes';
import { Route, Switch, Redirect } from 'react-router-dom';


function Routes(){
    console.log('Route')
    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            {/* {currentUser ? */}
                <Switch>
                    <Route exact path="/profileForm">
                        <ProfileForm />
                    </Route>
                    <Route exact path="/Signup">
                        <SignupForm />
                    </Route>
                    <Route exact path="/login">
                        <LoginForm />
                    </Route>
                    <Route exact path="/likes">
                        <Likes />
                    </Route>
                    <Route exact path="/matches">
                        <Matches />
                    </Route>
                    <Redirect to="/" />
                </Switch>
                {/* : */}
                {/* <Switch>
                    <Route exact path="/login">
                        <LoginForm handleLogin={handleLogin} />
                    </Route>
                    <Route exact path="/signup">
                        <SignupForm handleSignUp={handleSignUp} />
                    </Route>
                    <Redirect to="/" />
                </Switch> */}
                {/* } */}
        </Switch>
    )
}
export default Routes;