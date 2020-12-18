/* This component is used for Routing different components */

import React  from 'react'
import { Route, Switch } from 'react-router-dom'
import user from './User'
import userInfo from './UserInfo'

export default function App() {
  return(  
    <Switch>
      <Route exact path="/" component={user} />
      <Route path="/users" component={user} />
      <Route path="/userInfo" component={userInfo} />
     </Switch>
  ) 
}
