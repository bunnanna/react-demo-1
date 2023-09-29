import navstyle from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={navstyle.navbar}>
      <div className={navstyle.logo}>Navbar</div>
      <div className={navstyle.login}>
        <button>login</button>
      </div>
    </nav>
  )
}
export default Navbar
