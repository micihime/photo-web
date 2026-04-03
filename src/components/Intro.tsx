import autoportrait from '../assets/autoportrait.jpg'
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.intro}>
      <div>
        <h1>Macro & Abstract Photography</h1>
        <p>
          I came to macro and abstract photography through a photography school, and honestly, it kind of took over. 😄 There's something about zooming into the ordinary — a water droplet, a piece of wood, a shadow on a wall — and finding that it's actually full of geometry, texture, and drama. I get a little obsessed with that.
        </p>
        <p>
          I work with abstract patterns, natural textures, seasonal details, and food close-ups. The subjects vary, but the approach is always the same: slow down, look closer, and see what's actually there.
        </p>
      </div>
      <img src={autoportrait} alt="autoportrait" className={styles.portrait} />
    </div>
  )
}

export default Intro
