import React from 'react'
import "./resume.css"
import Data from './Data'
import Card from './Card'

const Resume = () => {
  return (
    <div>
      <section className="resume container section" id="resume">
        <h2 className="section__title">Education</h2>


        <div className="resume__container grid">
          <div className="timeline grid">
            {Data.map((val, id)=> {
              if(val.category === "education"){
                return (
                  <Card 
                  key={id} 
                  icon={val.icon} 
                  title={val.title}
                  year={val.year} 
                  desc={val.desc}
                  />
                )
              }
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume
