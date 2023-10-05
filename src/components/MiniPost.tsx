import { Link } from 'react-router-dom'
import { PostDTO } from '../types/postdto'
interface IPost {
  post: PostDTO
}
const MiniPost = ({ post }: IPost) => {
  const { title, userId, id } = post
  return (
    <Link to={`/posts/${id}`}>
      <div className="flex flex-col bg-slate-100 border rounded-2xl overflow-hidden w-96 cursor-pointer select-none">
        <div className="flex flex-col justify-between items-center bg-slate-600 p-4">
          <div className="text-slate-100 text-lg">{title}</div>
        </div>

        <div className="p-6"> By {userId}</div>
      </div>
    </Link>
  )
}
export default MiniPost
