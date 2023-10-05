import { createContext, ReactNode, useState, useContext } from 'react'
interface IAuthProvider {
  children: ReactNode
}
interface IAUthContext {
  isLogin: boolean
}
const AuthContext = createContext<IAUthContext | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error()
  return context
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const [isLogin, setisLogin] = useState(false)
  const store = {
    isLogin,
  }
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}
export default AuthProvider
