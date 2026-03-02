import styles from "./About.module.css";
import { IconCameraHeart, IconMacroFilled } from "@tabler/icons-react";

function About() {
  return (
    <div className={styles.about}>
      <div>
        <h2>Why I Photograph?</h2>
        <p>
          Photography, for me, is a form of self-discovery. It is a way to slow down, experiment freely, 
          and approach the world with genuine curiosity. I enjoy finding unexpected beauty in the overlooked. 
          {/* There are no rules here — only play, wonder, and the joy of the process itself. */}
        </p>
        <div className={styles.photoIcon}>
          <IconMacroFilled size={40} color="var(--color-primary-dark)" />
          <IconCameraHeart size={40} color="var(--color-primary)" />
          <IconMacroFilled size={40} color="var(--color-primary-dark)" />
        </div>
      </div>
      <div>
        <h2>Work With My Images</h2>
        <p>
          My macro and abstract photography is available in several ways. You can license my images as stock
          photography through Shutterstock, where my portfolio covers abstract patterns, nature details, 
          different textures, food close-ups, ready to use for your creative or commercial projects. 
        </p>
        {/* <p>
          My visuals are also 
          available as wallpapers and themes on the Samsung Galaxy Themes Store, bringing a touch of the 
          unexpected to your everyday screen. 
        </p> */}
        <p>
          And if something in my gallery stops you in your tracks, prints are available upon request. Just 
          reach out and we can make it happen.
        </p>
      </div>
    </div>
  )
}

export default About
