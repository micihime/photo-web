import styles from "./About.module.css";
import { IconCameraHeart, IconMacroFilled } from "@tabler/icons-react";
import photo from '../assets/photographing.jpg'

function About() {
  return (
    <div className={styles.about}>
      <img src={photo} alt="photographer taking pictures" className={styles.photo} />
      <div>
        <h2>Why I Photograph?</h2>
        <p>
          Photography is my way of approaching the world with curiosity and no pressure. It's a space where I get to experiment freely, slow down, and find something beautiful in what's usually overlooked. It's a little bit of self-discovery every time.
        </p>
        <div className={styles.photoIcon}>
          <IconMacroFilled size={40} color="var(--color-primary-dark)" />
          <IconCameraHeart size={40} color="var(--color-primary)" />
          <IconMacroFilled size={40} color="var(--color-primary-dark)" />
        </div>
      </div>
    </div>
  )
}

export default About
