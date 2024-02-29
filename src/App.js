import React from 'react'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App () {
  return (
    <div>
      <Header />
      <Body />
      <FaGithub />
      <FaLinkedin />
    </div>
  )
}

export default App;