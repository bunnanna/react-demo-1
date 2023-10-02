import { PostDTO } from '../types/postdto'
import Post from './Post'

const posts: PostDTO[] = [
  {
    id: 1,
    userId: 1,
    title: "Let's learn React!",
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    userId: 2,
    title: 'How to install Node.js',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 3,
    userId: 3,
    title: 'Basic HTML',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
]

const PostList = () => {
  return (
    <div className="flex gap-4 justify-center items-start my-10 mx-auto w-4/5">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
export default PostList
