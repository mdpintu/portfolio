import React from 'react'
import './myprojects.css'
import yakult from '../../assets/yakult.jpg'
import protinex from '../../assets/protinex.jpg'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import informatics from '../../assets/informatics.png'
import uxdt_giudeline from '../../assets/uxdt-guideline.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={informatics} alt="" />
          </div>
          <h3>Informatics</h3>
          <small className='text-light'>PHP | Javascript | Bootstrap | HTML | CSS</small>
          <div className="portfolio__item-cta">
            <a href="https://informatics.nic.in/" target="_blank" rel='noreferrer' className='btn'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={uxdt_giudeline} alt="" />
          </div>
          <h3>UXDT Guidelines</h3>
          <small className='text-light'>PHP | Javascript | Bootstrap | HTML | CSS</small>
          <div className="portfolio__item-cta">
            <a href="https://informaticsweb.nic.in/uxdt-guideline/" target="_blank" rel='noreferrer' className='btn'>Website</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={yakult} alt="" />
          </div>
          <h3>Yakult</h3>
          <small className='text-light'>PHP | MySQL |  Wordpress | Javascript | HTML | CSS</small>
          <div className="portfolio__item-cta">
            <a href="https://www.yakult.co.in/" target="_blank" rel='noreferrer' className='btn'>Website</a>
          </div>

        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={protinex} alt="" />
          </div>
          <h3>Protinex</h3>
          <small className='text-light'>HTML | CSS | JS | php | MySQL</small>
          <div className="portfolio__item-cta">
            <a href="https://www.protinex.com/" target="_blank" rel='noreferrer' className='btn'>Website</a>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <small className='text-light'>ReactJs | Redux | HTML | Tailwind CSS | Bootstrap5</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/mdpintu/portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
            <a href="https://mdpintu.github.io/portfolio" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>My Resume</h3>
          <small className='text-light'>HTML | CSS | JS | Bootstrap</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/mdpintu/portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
            <a href="https://mdpintu.github.io/my-resume/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
          </div>

        </article>
      </div>
    </section>
  )
}

export default Myprojects
