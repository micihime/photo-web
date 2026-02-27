import autoportrait from '../assets/autoportrait.jpg'
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.intro}>
      <p className={styles.introText}>short intro</p>
      <img src={autoportrait} alt="autoportrait" className={styles.portrait} />
    </div>
  )
}

export default Intro
