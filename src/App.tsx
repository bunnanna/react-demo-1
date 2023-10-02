import Maincontent from './components/Maincontent'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex flex-col items-center min-h-[100dvh]">
      <Navbar />
      <Maincontent />
    </div>
  )
}

export default App
