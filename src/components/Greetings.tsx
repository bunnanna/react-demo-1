import styleclass from './Greeting.module.css'
const Greetings = () => {
  return (
    <div className={styleclass.card}>
      <div className={styleclass.header}>Greetings</div>
      <div className={styleclass.body}>
        Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        perspiciatis repellat repudiandae nesciunt ullam nulla officiis error odit qui veniam.
      </div>
    </div>
  )
}
export default Greetings
