import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Cadastro from './components/Cadastro'
import Lista from './components/Lista'

export default props => (
    <main>
    <Switch>
      <Route exact path='/' component={Cadastro}/>
      <Route exact path='/lista' component={Lista}/>
      <Route path='*' component={Cadastro}/>
    </Switch>
  </main>
)