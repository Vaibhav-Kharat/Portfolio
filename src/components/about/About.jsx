import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-2.svg"

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container ">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I have a good understanding in designing and implementing scalable web applications using 
            modern frameworks and technologies. Skilled in front-end development with HTML, CSS, 
            JavaScript, as well as back-end development with languages like Java, Servlet Languages. Good 
            analytical skills and a passion for staying up-to-date with the latest trends and best practices in 
            software development,<br />
            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <b><a href="https://www.linkedin.com/in/vaibhav-kharat-b23a55218/">LinkedIn</a></b> and <b><a href="https://www.instagram.com/_vaibhav.kharat_/" >Instagram</a></b> where I post useful content related to Web Development and Programming  
            </p>
            <a href="#addResume" className="btnn">&nbsp;&nbsp;&nbsp;Download Resume &nbsp;&nbsp;&nbsp;</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills_title">
                <h3 className="skills_name">HTML/CSS/JavaScript/JQuery/Bootstrap/XML</h3>
                {/* <p className="skills__list">HTML/CSS/JavaScript/JQuery/Bootstrap/XML</p> */}
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage web__technologies development"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills_title">
                <h3 className="skills_name">Core Java/J2EE with Servlet/JSP/AdvanJava</h3>
                {/* <p className="skills__list">Core Java/J2EE with Servlet/JSP/AdvanJava</p> */}
                <span className="skills__number ">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage programming__languages "></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills_title">
                  <h3 className="skills_name">Oracle-SQL/Mongo DB</h3>
                  {/* <p className="skills__list">Oracle-SQL/Mongo DB</p> */}
                  <span className="skills__number ">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage database__technologies development"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills_title">
                  <h3 className="skills_name">Hibernate/Spring/Spring MVC/Spring Boot</h3>
                  {/* <p className="skills__list">Hibernate/Spring/Spring MVC/Spring Boot</p> */}
                  <span className="skills__number ">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage frameworks development"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
