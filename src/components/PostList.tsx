import { useEffect, useState } from 'react'
import { CreatePostDTO, PostDTO } from '../types/postdto'
import Post from './Post'
import PostForm from './PostForm'
import axios, { AxiosError } from 'axios'

const PostList = () => {
  const [posts, setposts] = useState<PostDTO[] | null>(null)
  const [err, setErr] = useState<AxiosError | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')
        .then((res) => setposts(res.data))
        .catch((err: AxiosError) => {
          setErr(err)
        })
    }
    fetchData()
  }, [])

  if (err) return <h1>{err.message}</h1>
  if (!posts) return <p>Loading...</p>

  const onHandlePost = async (post: CreatePostDTO) => {
    return axios.post<PostDTO>('https://jsonplaceholder.typicode.com/posts', post).then((res) => {
      setposts([res.data, ...posts])
      console.log(res.data)
    })
  }

  return (
    <>
      <PostForm onHandlePost={onHandlePost} />
      <div className="flex flex-col gap-4 justify-center items-start my-10 mx-auto w-4/5">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
export default PostList
