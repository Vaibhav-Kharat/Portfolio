import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Home from './components/home/Home';
import Abouts from './components/about/About';
import Contact from './components/contact/Contact';

const App = () => {
  return (
  <>
    <Sidebar />
    <main className="main">
      <Home />
      <Abouts />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  </>
  )
}

export default App;
