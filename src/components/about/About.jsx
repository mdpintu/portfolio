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
              <h5>Percentage</h5>Obtained Marks = 737 + 754 + 769 = 2260
              <small>62.78%</small>Maximum Marks = 1200 + 1200 + 1200 = 3600
            </article> */}

            <article className='about__card'>
              <BsBookmarkStar className='about__icon' />
              <h5>Percentage</h5> {/* Marks Obtained: 1968 /// Maximum Marks: 2850*/}
              <small>69.05%</small>
            </article>

            <article className='about__card'>
              <TfiWorld className='about__icon' />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Frontend Development</li>
                  <li>React js Development</li>
                  <li>Software Development</li>
                  <li>UI Development</li>
                  
                </ul>
              </small>
            </article>


          </div>
          <p>
            I am a passionate and self-motivated <strong>Senior Frontend & React.js Developer</strong> with 6+ years of experience in designing, developing, and maintaining responsive, user-friendly, and high-performance web applications. I hold an MCA degree from ISBM University and have hands-on experience delivering enterprise solutions as well as Government of India projects.

            My expertise includes <strong>React.js, Redux Toolkit, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, jQuery, RESTful API Integration, WordPress, PHP, MySQL, Git, and GitHub</strong>. I enjoy building reusable components, optimizing application performance, and creating modern, accessible, and mobile-first user interfaces.

            I am a quick learner, problem solver, and collaborative team player who is passionate about adopting new technologies, solving real-world challenges, and delivering high-quality digital solutions that provide an excellent user experience.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About