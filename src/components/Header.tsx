import logo from '../assets/logo.png'
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <h3 className={styles.slogan}>Details Tell the Story.</h3>
    </div>
  )
}

export default Header
