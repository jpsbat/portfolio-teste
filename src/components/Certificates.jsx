import styles from '../styles/Certificates.module.css';

const certificates = [
  "React Avançado - Alura",
  "Fullstack JavaScript - Origamid",
]

export default function Certificates() {
  return (
    <section id="certificates" className={styles.certificates}>
      <h2 className={styles.title}>Certificados</h2>
      <ul className={styles.certList}>
        {certificates.map((cert, i) => (
          <li key={i} className={styles.certItem}>{cert}</li>
        ))}
      </ul>
    </section>
  )
}