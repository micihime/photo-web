import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div>
        <h2>Why?</h2> {/* Why I Photograph */}
        <p>
          Photography, for me, is a form of self-discovery. It is an excuse to slow down, experiment freely, 
          and approach the world with genuine curiosity — to look at a leaf, a shadow, or a rusted surface 
          and ask what if I got closer? I am endlessly fascinated by what others walk past. Every shoot is 
          a small adventure in seeing differently, learning something new, and finding unexpected beauty in 
          the overlooked. There are no rules here — only play, wonder, and the joy of the process itself.
        </p>
      </div>
      <div>
        <h2>Services</h2> {/* Work With My Images */}
        <p>
          My macro and abstract photography is available in several ways. You can license my images as stock
          photography through Shutterstock, where my portfolio covers textures, nature details, food close-ups, 
          and abstract patterns - ready to use for your creative or commercial projects. My visuals are also 
          available as wallpapers and themes on the Samsung Galaxy Themes Store, bringing a touch of the 
          unexpected to your everyday screen. And if something in my gallery stops you in your tracks, prints 
          are available upon request. Just reach out and we can make it happen.
        </p>
      </div>
    </div>
  )
}

export default About
