import { NavLink } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
  return (
    <nav className="h-8 py-7 px-3 mx-5 w-screen flex sticky top-0 justify-between items-center bg-slate-100">
      <div>Navbar</div>
      <div className="flex gap-4">
        <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : '')} to={'/'}>
          PostList
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : '')} to={'/profile'}>
          Profile
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : '')} to={'/create'}>
          Create
        </NavLink>
        <button>login</button>
      </div>
    </nav>
  )
}
export default Navbar
