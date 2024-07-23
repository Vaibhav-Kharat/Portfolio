import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div class="contact__container" id='contact'>
    <h1 className='contact__title'>Contact</h1>
    <div className="contact__block">
      <p className='p__email'>Connect with me through Mail <a href="mailto:thevaibhavkharat@gmail.com">thevaibhavkharat@gmail.com</a> <a href="#addResume" className="btnn">&nbsp;&nbsp;&nbsp;Download Resume &nbsp;&nbsp;&nbsp;</a></p>
    <div class="contact__box">
      <p>If you like my work and efforts, please contact me.</p>
      <p>Thank you!</p>
      <div class="social-links">
      <a href="https://www.linkedin.com/in/vaibhav-kharat-b23a55218/" className="contact__social-links" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a href="https://github.com/Vaibhav-Kharat" className="contact__social-links" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
      </div>
      <p>&copy; Vaibhav Kharat</p>
    </div>
    </div>
  </div>
  )
}

export default Contact
