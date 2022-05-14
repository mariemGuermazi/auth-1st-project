import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../../PrivateRoutes/PrivateRoute'
import LogIn from './Auth/LogIn'
import Register from './Auth/Register'
import Profile from './Profile/Profile'

const Body = () => {
  return (
    <div>
        <Switch>
            <Route path="/login" component={LogIn} exact/>
            <Route path="/register" component={Register} exact/>
            <PrivateRoute path="/Profile" component={Profile} />
            <Route/>
        </Switch>
    </div>
  )
}

export default Body