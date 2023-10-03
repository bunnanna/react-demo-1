import { useState } from 'react'
interface IFormData {
  title: string
  body: string
}
const PostForm = () => {
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
        className="border border-slate-950"
        onClick={(e) => {
          e.preventDefault()
          setformData({ title: '', body: '' })
        }}
      >
        clear
      </button>
    </form>
  )
}
export default PostForm
