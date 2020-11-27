import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// NOTE: RootComponent;
import RootComponent from './components/RootComponent'

// NOTE: pages;
import IntroPlaybackPage from './pages/IntroPlayback'
import WelcomePage from './pages/Welcome'
import TestPage from './pages/Test'
import ResultPage from './pages/Result'

const App = props => {
  return (
    <RootComponent>
      <Router>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/intro' component={IntroPlaybackPage} />
          <Route exact path='/test' component={TestPage} />
          <Route exact path='/result/:code' component={ResultPage} />
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </RootComponent>
  )
}

export default App
