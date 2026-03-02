import autoportrait from '../assets/autoportrait.jpg'
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.intro}>
      <div>
        <h3>
          I'm a photographer with a passion for the details most eyes pass over 
        </h3>
        <p>
          ... the texture of weathered wood, the geometry hidden in a drop of water, the quiet drama of light 
          and shadow. 
        </p>
        <p>
          I specialize in macro and abstract photography. My work spans abstract patterns, natural textures, 
          seasonal details, and food close-ups. For me, photography is as much about slowing down and truly 
          seeing as it is about the final image, and that sense of discovery is what keeps me reaching for 
          my camera.
        </p>
      </div>
      <img src={autoportrait} alt="autoportrait" className={styles.portrait} />
    </div>
  )
}

export default Intro
