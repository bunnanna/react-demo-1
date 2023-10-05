import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import usePost from '../hooks/usePost'
import { useAuth } from '../providers/AuthProvider'

const Post = () => {
  const { id } = useParams()
  const { post, isLoading, isError } = usePost(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const { isLogin } = useAuth()
  console.log('from post', isLogin)

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error</h1>
  if (post === null) return null

  const { title, body, userId } = post
  return (
    <div className="flex flex-col bg-slate-100 border rounded-2xl overflow-hidden w-96 select-none">
      <div className="flex gap-5 items-center bg-slate-600 p-4 ">
        <Link to={'/posts/'} className="text-5xl text-blue-200">
          &lt;
        </Link>
        <div className="text-slate-100 text-lg">{title}</div>
        <div>{userId}</div>
      </div>

      <div className="p-6 ">{body}</div>
    </div>
  )
}
export default Post
