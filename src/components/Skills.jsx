import styles from '../styles/Skills.module.css';

const skills = ["React", "JavaScript", "TypeScript", "Node.js", "HTML", "CSS", "Git"]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Habilidades</h2>
      <ul className={styles.skillList}>
        {skills.map((skill, i) => (
          <li key={i} className={styles.skillItem}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}