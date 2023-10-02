interface IGreeting {
  name: string
  isLogin: boolean
}
const Greetings = ({ name, isLogin }: IGreeting) => {
  return (
    <div className="w-64 h-20 border-solid border border-black rounded-lg flex justify-around items-center gap-2 p-5">
      {isLogin ? (
        <>
          <div className=" text-lg text-red-600">Greetings</div>
          <div className="text-base ">{name}</div>
        </>
      ) : (
        <div>Unknown</div>
      )}
    </div>
  )
}
export default Greetings
