import React from 'react'
import { motion } from 'framer-motion'

import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

function Dashboard() {
  const { signOut } = useAuth()
  const history = useHistory()

  React.useEffect(() => () => console.log('Dashboard Unmount'), [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h1>Dashboard</h1>

      {/* <button onClick={signOut}>LOGOUT</button> */}
      <button onClick={() => history.push('/')}>LOGOUT</button>
    </motion.div>
  )
}

export default Dashboard
