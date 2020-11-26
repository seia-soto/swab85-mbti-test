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

const App = props => {
  return (
    <RootComponent>
      <Router>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/intro' component={IntroPlaybackPage} />
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </RootComponent>
  )
}

export default App
