import React from 'react'
import "./sidebar.css"
import Logo from '../../assets/logo.svg';

const Sidebar = () => {
  return (
   

    <> <aside className='aside'>
    <a href="#home" className="nav__logo">
      <img src={Logo} alt="" />
    </a>

    <nav className="nav"> 
      <div className="nav__menu">
        <ul className="nav__list">
            <a href="#home" className="nav__link">
              <i className="icon-home"></i>
            </a>
          

          
            <a href="#about" className="nav__link">
              <i className="icon-user-following"></i>
            </a>
         

          
            <a href="#resume" className="nav__link">
              <i className="icon-graduation"></i>
            </a>


          
            <a href="#work" className="nav__link">
              <i className="icon-layers"></i>
            </a>


            <a href="#contact" className="nav__link">
              <i className="icon-bubble"></i>
            </a>
          
        </ul>
      </div>
    </nav>


    <div className="nav__footer">
      <span className="copyright">&copy;2024 - 2025.</span>
    </div>
  </aside>
  </>
  )
}

export default Sidebar    
