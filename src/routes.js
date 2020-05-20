import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

import Main from './pages/Main'
import Teste from './pages/Teste'
import Users from './pages/Users'

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>

        <Route component={Main} path='/' exact/>
        <Route component={Teste} path='/cadastro'/>
        <Route component={Users} path='/Users'/>

      </Switch>
    </BrowserRouter>
  )
}