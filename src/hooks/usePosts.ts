import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { CreatePostDTO, PostDTO } from '../types/postdto'

const usePosts = (url: string) => {
  const [posts, setposts] = useState<PostDTO[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<AxiosError | null>(null)
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      await axios
        .get<PostDTO[]>(url)
        .then((res) => setposts(res.data))
        .catch((err: AxiosError) => {
          setIsError(err)
        })
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  const onSendPost = async (post: CreatePostDTO) => {
    setIsSending(true)
    await axios.post<PostDTO>(url, post).then((res) => {
      setposts([res.data, ...posts])
      console.log(res.data)
    })
    setIsSending(false)
  }

  return { posts, isLoading, isError, isSending, onSendPost }
}
export default usePosts
