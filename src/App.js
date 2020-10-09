import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import { AuthProvider } from './hooks/useAuth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch key={location.pathname} location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </AuthProvider>
  )
}

export default App
