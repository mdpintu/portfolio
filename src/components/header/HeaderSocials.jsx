import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa";

const HeaderSocials = () => {
  return (

    <div className="header__socials">

      <a href="https://www.linkedin.com/in/md-pintu-b12486147" target="_blank" rel='noreferrer'><BsLinkedin /></a>
      <a href="https://github.com/mdpintu/" target="_blank" rel='noreferrer'><BsGithub /></a>
      <a href="https://www.facebook.com/mdpintudl" target="_blank" rel='noreferrer'><FaFacebookF /></a>
    </div>
  )
}

export default HeaderSocials