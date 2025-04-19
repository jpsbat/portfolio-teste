import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>Quem sou eu</h2>
      <p className={styles.description}>Desenvolvedor front-end apaixonado por React, interfaces modernas e experiências digitais incríveis. Trabalho com tecnologias como React, TypeScript, Node.js e mais.</p>
    </section>
  )
}