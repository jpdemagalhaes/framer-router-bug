import React, { createContext, useContext } from 'react'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(false)
  const signIn = React.useCallback(() => setUser(true), [setUser])
  const signOut = React.useCallback(() => setUser(false), [setUser])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
