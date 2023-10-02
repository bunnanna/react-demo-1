import Greetings from './Greetings'
const Maincontent = () => {
  return (
    <main className="flex-1 flex items-center justify-center gap-3">
      <Greetings name="bun" isLogin />
      <Greetings name="bun" isLogin={false} />
    </main>
  )
}
export default Maincontent
