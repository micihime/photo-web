import styles from "./Footer.module.css";
import {
  IconBrandInstagram,
  // IconSquareRoundedLetterSFilled,
  IconMail,
} from "@tabler/icons-react";

function Footer() {
  const handleEmailClick = () => {
    const username = "mitchie.arte";
    const domain = "gmail.com";
    window.location.href = `mailto:${username}@${domain}`;
  };

  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://instagram.com/topinkastudio" target="_blank" rel="noopener noreferrer" title="Instagram"><IconBrandInstagram size={30} /></a>
        {/* <a href="https://shutterstock.com/micihime" target="_blank" rel="noopener noreferrer" title="Shutterstock"><IconSquareRoundedLetterSFilled size={30} /></a> */}
        <button type="button" className={styles.iconButton} onClick={handleEmailClick} title="Email">
          <IconMail size={30} />
        </button>
      </div>
      <p>Designed by <a href="https://mhresko.com/" target="_blank" rel="noopener noreferrer">Miči</a></p>
    </footer>
  )
}

export default Footer
