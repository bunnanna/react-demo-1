import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { useEffect } from 'react'

const BlankTemplate = () => {
  const { isLogin } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLogin) navigate('/login')
  }, [isLogin, navigate])
  return <Outlet />
}
export default BlankTemplate
