import React from 'react'
import web from './images/about.jpg'
import Comman from './Comman'
const About = () => {
    return(
        <>
        <Comman title="ABOUT MY PROFILE" subTitle="I am a Front-end Developer<br> I have 6+ Years of Experience <br>in this field of UI Domain" softSkil="Software Skill: HTML, CSS, Javascript and REACT JS" imgsrc={web} link="About Me"/>
        </>
    )
}
export default About