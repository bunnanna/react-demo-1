import { NavLink } from 'react-router-dom'
import '../index.css'
import { useAuth } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { isLogin, username, logout } = useAuth()

  return (
    <nav className="h-8 py-7 px-3 mx-5 w-screen flex sticky top-0 justify-between items-center bg-slate-100">
      <Link to={'/'}>Navbar</Link>
      <div className="flex gap-4">
        {isLogin ? (
          <>
            <div>{username}</div>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : '')} to={'/posts'}>
              PostList
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : '')} to={'/profile'}>
              Profile
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : '')} to={'/posts/create'}>
              Create
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : '')} to={'/'} onClick={logout}>
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : '')} to={'/login'}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  )
}
export default Navbar
