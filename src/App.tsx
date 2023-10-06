import { Route, Routes } from 'react-router-dom'
import PagesTemplate from './template/PagesTemplate'
import Profile from './pages/Profile'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import Post from './components/Post'
import Login from './pages/Login'
import Home from './pages/Home'
import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'

function App() {
  const { isLogin } = useAuth()
  return (
    <Routes>
      <Route path="/" element={<PagesTemplate />}>
        <Route index element={<Home />} />
        <Route path="/posts" element={<GuardedRoute isRouteAccessible={isLogin} redirectRoute="/login" />}>
          <Route index element={<PostList />} />
          <Route path="create" element={<PostForm />} />
          <Route path=":id" element={<Post />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={!isLogin} redirectRoute="/" />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
