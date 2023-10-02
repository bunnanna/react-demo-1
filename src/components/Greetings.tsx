const Greetings = ({ name }: { name: string }) => {
  return (
    <div className="w-64 h-auto border-solid border border-black rounded-lg flex justify-around items-center gap-2 p-5">
      <div className=" text-lg text-red-600">Greetings</div>
      <div className="text-base ">{name}</div>
    </div>
  )
}
export default Greetings
