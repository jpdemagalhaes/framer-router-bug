import React from 'react'
import { motion } from 'framer-motion'
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom'

import { useAuth } from './hooks/useAuth'

const CustomRoute = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth()

  return (
    <ReactDOMRoute
      {...rest}
      component={({ location }) => {
        console.log(location)

        return isPrivate === !!user ? (
          <motion.div exit="undefined">
            <Component />
          </motion.div>
        ) : (
          <motion.div exit="undefined">
            <Redirect
              push
              to={{
                pathname: isPrivate ? '/' : '/dashboard'
              }}
            />
          </motion.div>
        )
      }}
    />
  )
}

export default CustomRoute
