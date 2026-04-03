import logo from '../assets/logo.png'
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <h3 className={styles.slogan}>Details Tell the Story.</h3>
    </header>
  )
}

export default Header
