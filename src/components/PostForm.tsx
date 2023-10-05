import { useState } from 'react'
import { IFormData } from '../types/postdto'
import usePosts from '../hooks/usePosts'

const PostForm = () => {
  const [formData, setformData] = useState<IFormData>({ title: '', body: '' })
  const { isSending, onSendPost } = usePosts('https://jsonplaceholder.typicode.com/posts')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  return (
    <form className="flex flex-col gap-3 items-center border border-slate-950 rounded-3xl bg-slate-200 p-7">
      <div className="m-5 w-full flex justify-between">
        <label htmlFor="title">title</label>
        <input type="text" value={formData.title} onChange={handleChange} name="title" required />
      </div>
      <div className="m-5 w-full flex justify-between">
        <label htmlFor="body">body</label>
        <input type="text" value={formData.body} onChange={handleChange} name="body" required />
      </div>

      <button
        className="border border-slate-950 w-full p-3 rounded-full text-slate-50 text-2xl"
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
