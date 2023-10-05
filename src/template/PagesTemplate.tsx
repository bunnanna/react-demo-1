import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PagesTemplate = () => {
  return (
    <div className="flex flex-col items-center min-h-[100dvh]">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
export default PagesTemplate
