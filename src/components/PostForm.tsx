import { useState } from 'react'
import { IFormData, CreatePostDTO } from '../types/postdto'

const PostForm = ({
  onSendPost,
  isSending,
}: {
  onSendPost: (post: CreatePostDTO) => Promise<void>
  isSending: boolean
}) => {
  const [formData, setformData] = useState<IFormData>({ title: '', body: '' })

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
        style={{ backgroundColor: `${isSending ? 'red' : 'blue'}` }}
        disabled={isSending}
        onClick={async (e) => {
          e.preventDefault()
          await onSendPost({ ...formData, userId: 2 })
          setformData({ title: '', body: '' })
        }}
      >
        Post
      </button>
    </form>
  )
}
export default PostForm
