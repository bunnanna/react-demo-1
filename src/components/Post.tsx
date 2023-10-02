import { PostDTO } from '../types/postdto'
import { useState } from 'react'
interface IPost {
  post: PostDTO
}
const Post = ({ post }: IPost) => {
  const { userId, title, body } = post
  const [show, setShow] = useState<boolean>(false)
  return (
    <div
      className="flex flex-col bg-slate-100 border rounded-2xl overflow-hidden w-96 cursor-pointer select-none"
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="flex justify-between items-center bg-slate-600 p-4">
        <div className="text-slate-100 text-lg">{title}</div>
        <div>{userId}</div>
      </div>

      <div className="p-6">{show ? <div>{body}</div> : <div>click to open</div>} </div>
    </div>
  )
}
export default Post
