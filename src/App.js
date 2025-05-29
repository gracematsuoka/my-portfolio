import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
// import ProjectPopup from './components/ProjectPopup';
import Experience from './components/Experience';
import About from './components/About';

function App() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  return (
    <div className="App">
        <Navbar />
        <div className="content">
          <section id="home"><Home /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="about"><About /></section>
        </div>
        <Contact />
    </div>
  );
}

export default App;
