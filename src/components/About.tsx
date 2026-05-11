import styles from "./About.module.css";
import { IconCameraHeart } from "@tabler/icons-react";
import photo from '../assets/photographing2.jpg'

function About() {
  return (
    <div className={styles.about}>
      <img src={photo} alt="photographer taking pictures" className={styles.photo} />
      <div>
        <p>
          I work with abstract patterns, natural textures, seasonal details, and food close-ups. The subjects vary, 
          but the approach is always the same: slow down, look closer, and see what's actually there.
        </p>
        <p>
          Photography is my way of approaching the world with curiosity and no pressure. It's a space where I get to 
          experiment freely, slow down, and find something beautiful in what's usually overlooked. It's a little bit 
          of self-discovery every time.
        </p>
        <div className={styles.photoIcon}>
          <IconCameraHeart size={40} color="var(--color-primary-dark)" />
        </div>
      </div>
    </div>
  )
}

export default About
