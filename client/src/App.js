import './App.css'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Fragment } from 'react'

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <MainSection />
      </Fragment>
    </Router>
  )
}

export default App
