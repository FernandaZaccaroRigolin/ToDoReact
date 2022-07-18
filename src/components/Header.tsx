import styles from './Header.module.css'

import logo from '../images/Logo.svg'

export function Header(){
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do To-Do list" />
    </header>

  )
  
}