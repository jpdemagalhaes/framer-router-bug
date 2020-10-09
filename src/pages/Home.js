import React from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useAuth } from '../hooks/useAuth'

function Home() {
  const { signIn } = useAuth()

  React.useEffect(() => () => console.log('Home Unmount'), [])

  const history = useHistory()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
    >
      <h1>Home</h1>

      {/* <button onClick={signIn}>LOGIN</button> */}
      <button onClick={() => history.push('/dashboard')}>LOGIN</button>
    </motion.div>
  )
}

export default Home
