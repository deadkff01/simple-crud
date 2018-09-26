import React, { Component } from 'react'
import './App.css'
import Menu from './components/Menu'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
      <Menu />
      <Routes />
      </div>
    )
  }
}

export default App
