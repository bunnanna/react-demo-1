import { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { ILoginDTO } from '../types/Authdto'
const Login = () => {
  const { login } = useAuth()
  const [loginBody, setLoginBody] = useState<ILoginDTO>({ username: '', password: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login(loginBody).catch((err) => console.log(err))
  }
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginBody((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  return (
    <form
      className="p-5 m-5 bg-white border rounded-2xl flex flex-col justify-between items-center gap-5"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-3">
        <label htmlFor="username">Username</label>
        <input className="border-2 " type="text" name="username" onChange={handleFormChange} />
      </div>
      <div className="flex gap-3">
        <label htmlFor="password">Password</label>
        <input className="border-2 " type="password" name="password" onChange={handleFormChange} />
      </div>
      <button className="border bg-blue-400 rounded-md w-full" type="submit">
        Login
      </button>
    </form>
  )
}
export default Login
