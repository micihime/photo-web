import autoportrait from '../assets/autoportrait.jpg'
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.intro}>
      <div>
        <h1>Macro & Abstract Photography</h1>
        <p>
          I came to macro and abstract photography through a photography school, and honestly, it kind of took over. 😄 
          There's something about zooming into the ordinary. A water droplet, a piece of wood, a shadow on a wall. Up 
          close, they're a completely different world.
        </p>
      </div>
      <img src={autoportrait} alt="autoportrait" className={styles.portrait} />
    </div>
  )
}

export default Intro
