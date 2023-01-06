import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="service_container">
        <div className="services_container">
          <article className="services">
            <div className="service_head">
              <h3>UI/UX Design </h3>
            </div>

            <ul className="services_list">
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
            </ul>
          </article>
        </div>
      {/* END OF UI/UX */} 

      <div className="services_container">
          <article className="services">
            <div className="service_head">
              <h3>Web Deveploment </h3>
            </div>

            <ul className="services_list">
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
            </ul>
          </article>
        </div>
        {/* END OF WEB DEVELOPMENT */}

        <div className="services_container">
          <article className="services">
            <div className="service_head">
              <h3>Content Creation </h3>
            </div>

            <ul className="services_list">
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
              <li>
                <BiCheck className='services_name-icon'/>
                <p>Lorem ipsum dolor sit amet!</p>
              </li>
            </ul>
          </article>
        </div>

      </div>

      

    </section>
  )
}

export default Services