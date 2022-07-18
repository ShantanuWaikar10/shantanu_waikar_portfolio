import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Ecommerce website.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ShantanuWaikar10/ecommerce-by-shantanu" className='btn'>Github</a>
            <a href="https://ecommerce-by-shantanu.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Covid-19 Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ShantanuWaikar10/covid-tracker" className='btn'>Github</a>
            <a href="https://covid-tracker-ten-puce.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ShantanuWaikar10/weather-app-stige" className='btn'>Github</a>
            <a href="https://weather-app-stige1.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Simon Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ShantanuWaikar10/simon-game-project" className='btn'>Github</a>
            <a href="https://simon-game-project.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Netflix Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ShantanuWaikar10/Netflix_clone_stige" className='btn'>Github</a>
            <a href="https://netflix-clone-stige.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio