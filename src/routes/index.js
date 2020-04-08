import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './RoutePrivate'
 
export default function Routes() {
  return ( 
      <Switch>
        <Route path={`/`}  component={() => <h1>Public Route</h1>} />
        <Route path={`/login`}  component={() => <h1>Login</h1>} />
        <Route path={`/private`} isPrivate component={() => <h1>Private Route</h1>} />
      </Switch> 
  )
}
