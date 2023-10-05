import Post from './Post'
import usePosts from '../hooks/usePosts'

const PostList = () => {
  const { posts, isLoading, isError } = usePosts('https://jsonplaceholder.typicode.com/posts')

  if (isError) return <h1>{isError.message}</h1>
  if (isLoading) return <p>Loading...</p>

  return (
    <div className="flex flex-col gap-4 justify-center items-start my-10 mx-auto w-4/5">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
export default PostList
