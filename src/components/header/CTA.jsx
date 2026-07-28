import React from 'react'
import CV from '../../assets/Md_Pintu_Frontend_developer_Resume_6_years_Experience.docx'

const CTA = () => {

  return (

    <div className="cta">

      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA