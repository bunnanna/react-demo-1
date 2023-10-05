import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { PostDTO } from '../types/postdto'

const usePost = (url: string) => {
  const [post, setposts] = useState<PostDTO>({ title: '', body: '', userId: 0, id: 0 })
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<AxiosError | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      await axios
        .get<PostDTO>(url)
        .then((res) => setposts(res.data))
        .catch((err: AxiosError) => {
          setIsError(err)
        })
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return { post, isLoading, isError }
}
export default usePost
