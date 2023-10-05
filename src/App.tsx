import { Route, Routes } from 'react-router-dom'
import PagesTemplate from './template/PagesTemplate'
import Profile from './pages/Profile'
import PostForm from './components/PostForm'
import PostList from './components/PostList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PagesTemplate />}>
        <Route path="/" element={<PostList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<PostForm />} />
      </Route>
    </Routes>
  )
}

export default App
