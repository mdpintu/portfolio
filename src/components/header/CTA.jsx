import React from 'react'
import CV from '../../assets/Mohd_Pintu_React_Developer_8Years.pdf'

const CTA = () => {

  return (

    <div className="cta">

      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA