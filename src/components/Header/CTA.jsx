import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Dowload CV</a>
        <a href="#contact" clasName='btn' id="btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA