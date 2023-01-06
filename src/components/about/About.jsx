import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div id='about_me'>
          <div id='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Project</h5>
              <small>80+ completed</small>
            </article>

          </div>

          <p id='text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, minus velit, at, dignissimos deleniti iure harum quam provident unde libero alias dolor eum vero blanditiis ab perspiciatis necessitatibus ipsum hic!
            
          </p>
          <br/>
          <a id='btn-primary' href="#contact">Let's Talk</a>
        </div>
        
      </div>

    </section>
  )
}

export default About