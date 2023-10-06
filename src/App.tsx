import { Route, Routes } from 'react-router-dom'
import PagesTemplate from './template/PagesTemplate'
import Profile from './pages/Profile'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import BlankTemplate from './template/BlankTemplate'
import Post from './components/Post'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PagesTemplate />}>
        <Route index element={<Home />} />
        <Route path="/posts" element={<BlankTemplate />}>
          <Route index element={<PostList />} />
          <Route path="create" element={<PostForm />} />
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
