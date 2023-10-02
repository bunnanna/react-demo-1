import Greetings from './Greetings'
import PostList from './PostList'
const Maincontent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex my-5 gap-3">
        <Greetings name="bun" isLogin />
        <Greetings name="bun" isLogin={false} />
      </div>
      <PostList />
    </div>
  )
}
export default Maincontent
