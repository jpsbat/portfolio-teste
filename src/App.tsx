import React from 'react'
import styles from './styles/App.module.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Skills from './components/Skills'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <About />
      <Projects />
      <Certificates />
      <Skills />
    </div>
  )
}

export default App
