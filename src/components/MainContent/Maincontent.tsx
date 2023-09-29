import Greetings from '../Greetings/Greetings'
import maincontentstyles from './MainContent.module.css'
const Maincontent = () => {
  return (
    <main className={maincontentstyles.maincontent}>
      <Greetings />
    </main>
  )
}
export default Maincontent
