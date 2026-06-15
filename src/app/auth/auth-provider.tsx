'use client'

import { AuthContext } from "./auth-context";

interface AuthProviderProps{
  children: React.ReactNode, 
  authenticated: boolean
}

export function AuthProvider({children, authenticated}: AuthProviderProps){

  return (
    <AuthContext.Provider value={authenticated}>
      {children}
    </AuthContext.Provider>
  )
}