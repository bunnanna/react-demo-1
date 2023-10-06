import axios from 'axios'
import { createContext, ReactNode, useState, useContext } from 'react'
import { ICredentialDTO, ILoginDTO } from '../types/Authdto'
interface IAuthProvider {
  children: ReactNode
}
interface IAUthContext {
  isLogin: boolean
  username: string | null
  login: (loginBody: ILoginDTO) => Promise<void>
  logout: () => void
}
const AuthContext = createContext<IAUthContext | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error()
  return context
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const [isLogin, setisLogin] = useState<boolean>(!!localStorage.getItem('token'))
  const [username, setUsername] = useState(localStorage.getItem('username'))
  const login = async (loginBody: ILoginDTO) => {
    const res = await axios
      .post<ICredentialDTO>('https://api.learnhub.thanayut.in.th/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => res.data)
    localStorage.setItem('token', res.accessToken)
    localStorage.setItem('username', loginBody.username)
    setUsername(loginBody.username)
    setisLogin(true)
    console.log(res)
  }
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setUsername(null)
    setisLogin(false)
  }
  const store: IAUthContext = {
    username,
    isLogin,
    login,
    logout,
  }
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}
export default AuthProvider
