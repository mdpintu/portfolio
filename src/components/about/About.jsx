import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import { GiGraduateCap } from 'react-icons/gi'
import { BsBookmarkStar } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Degree</h5>
              <small>Master of Computer Applications (MCA) <br /><i>ISBM University Chhattisgarh.</i></small>
            </article>
            {/* <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Degree</h5>
              <small>BSC(IT) Information Technology <br /><i>ISBM University Chhattisgarh.</i></small>
            </article> */}

            <article className='about__card'>
              <BsBookmarkStar className='about__icon' />
              <h5>Percentage</h5>
              <small>69.05%</small>
            </article>

            <article className='about__card'>
              <TfiWorld className='about__icon' />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Frontend Development</li>
                  <li>Software Development</li>
                  <li>Reactjs Development</li>
                  <li>UI Development</li>
                  
                </ul>
              </small>
            </article>



          </div>
          <p>
            I am a passionate and self-motivated <b>Frontend & Software Developer</b> with a strong academic background from ISBM University, Chhattisgarh.
            I specialize in developing responsive, user-friendly, and modern web applications using the latest frontend technologies.

            With hands-on experience in HTML5, CSS3, JavaScript, React.js, Bootstrap, WordPress, and other web technologies, I am always eager to enhance my technical expertise and contribute to innovative projects.

            I am a quick learner, problem solver, and team player who enjoys taking on new challenges and continuously improving both technical and professional skills.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About