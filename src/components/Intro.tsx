import autoportrait from '../assets/autoportrait.jpg'
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.intro}>
      <p> {/* <p className={styles.introText}> */}
        I'm a photographer with a passion for the details most eyes pass over - the texture of weathered wood, 
        the geometry hidden in a drop of water, the quiet drama of light and shadow. I specialize in macro and 
        abstract photography, drawn to the way a close-up lens can transform the ordinary into something almost 
        otherworldly. My work spans natural textures, food close-ups, seasonal details, and abstract patterns, 
        and is available as stock photography on Shutterstock. For me, photography is as much about slowing 
        down and truly seeing as it is about the final image, and that sense of discovery is what keeps me 
        reaching for my camera.
      </p>
      <img src={autoportrait} alt="autoportrait" className={styles.portrait} />
    </div>
  )
}

export default Intro
