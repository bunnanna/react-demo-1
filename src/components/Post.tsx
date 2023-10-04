import { PostDTO } from '../types/postdto'
import { useState } from 'react'
interface IPost {
  post: PostDTO
}
const Post = ({ post }: IPost) => {
  const { title, body } = post
  const [show, setShow] = useState<boolean>(false)
  return (
    <div
      className="flex bg-slate-100 border rounded-2xl overflow-hidden w-96 cursor-pointer select-none"
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="flex flex-col justify-between items-center bg-slate-600 p-4 w-2/5">
        <div className="text-slate-100 text-lg">{title}</div>
        <div className="text-slate-100">{!show ? '' : 'click to close'}</div>
      </div>

      <div className="p-6 w-3/5">{show ? <div>{body}</div> : <div>click to open</div>} </div>
    </div>
  )
}
export default Post
