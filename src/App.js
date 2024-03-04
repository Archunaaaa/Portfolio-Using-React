import React from 'react'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
function App () {
  return (
    <div>
      <Header />
      <Body />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App;