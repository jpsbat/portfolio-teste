import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Meu Portfólio</h1>
      <nav className={styles.nav}>
        <a className={styles.navLink} href="#about">Quem sou eu</a>
        <a className={styles.navLink} href="#projects">Projetos</a>
        <a className={styles.navLink} href="#certificates">Certificados</a>
        <a className={styles.navLink} href="#skills">Habilidades</a>
      </nav>
    </header>
  )
}