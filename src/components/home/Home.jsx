import React from 'react'
import "./home.css"
import me from "../../assets/avatar-1.svg"
import HeaderSocial from './HeaderSocial'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={me} alt="" className="home__img" />
        <h1 className="home__name">HEY, I'M VAIBHAV KHARAT</h1>
        <span className="home__education">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</span>

        <HeaderSocial/>
        <a href="#contact" className="btn">&nbsp;&nbsp;&nbsp; Hire Me &nbsp;&nbsp;&nbsp; </a>

        <ScrollDown/>
      </div>
      <Shapes />
    </section>
  )
}

export default Home
