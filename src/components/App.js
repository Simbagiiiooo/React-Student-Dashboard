import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import '../i18n';

import Container from './Container'
import Nav from './Nav/Nav'

const App = () => (
  <div className="App">
    <Router>
      <Nav />
      <Container />
    </Router>
  </div>
)

export default App;
