import styles from "./Footer.module.css";
import {
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

function Footer() {return (
    <div className={styles.footer}>
      <div>
        <a href="https://instagram.com/topinkastudio"><IconBrandInstagram size={30} /></a>
        <a href="https://instagram.com/topinkastudio"><IconMail size={30} /></a>
      </div>
      <p>Designed by <a href="https://mitchie.dev/">Miči</a></p>
    </div>
  )
}

export default Footer
