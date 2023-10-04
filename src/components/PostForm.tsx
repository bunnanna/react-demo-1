import { useState } from 'react'
import { IFormData, CreatePostDTO } from '../types/postdto'

const PostForm = ({ onHandlePost }: { onHandlePost: (post: CreatePostDTO) => Promise<void> }) => {
  const [formData, setformData] = useState<IFormData>({ title: '', body: '' })
  const [sending, setsending] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  return (
    <form>
      <label htmlFor="title">title</label>
      <input type="text" value={formData.title} onChange={handleChange} name="title" />
      <label htmlFor="body">body</label>
      <input type="text" value={formData.body} onChange={handleChange} name="body" />
      <button
        className="border border-slate-950 "
        style={{ backgroundColor: `${sending ? 'red' : 'blue'}` }}
        disabled={sending}
        onClick={async (e) => {
          e.preventDefault()
          setsending(true)
          await onHandlePost({ ...formData, userId: 2 })
          setformData({ title: '', body: '' })
          setsending(false)
        }}
      >
        Post
      </button>
    </form>
  )
}
export default PostForm
