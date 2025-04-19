import styles from '../styles/Projects.module.css';

const projects = [
  { title: "Portfolio", description: "Site pessoal feito em React." },
  { title: "App de Tarefas", description: "To-do com autenticação e banco de dados." },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projetos</h2>
      <ul className={styles.projectList}>
        {projects.map((proj, i) => (
          <li key={i} className={styles.projectItem}>
            <h3 className={styles.projectTitle}>{proj.title}</h3>
            <p className={styles.projectDescription}>{proj.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}