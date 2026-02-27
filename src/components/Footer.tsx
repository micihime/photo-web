import styles from "./Footer.module.css";
import {
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

function Footer() {
  const handleEmailClick = () => {
    const username = "mitchie.arte";
    const domain = "gmail.com";
    window.location.href = `mailto:${username}@${domain}`;
  };

  return (
    <div className={styles.footer}>
      <div>
        <a href="https://instagram.com/topinkastudio"><IconBrandInstagram size={30} /></a>
        <button type="button" className={styles.iconButton} onClick={handleEmailClick}>
          <IconMail size={30} />
        </button>
      </div>
      <p>Designed by <a href="https://mitchie.dev/">Miči</a></p>
    </div>
  )
}

export default Footer
