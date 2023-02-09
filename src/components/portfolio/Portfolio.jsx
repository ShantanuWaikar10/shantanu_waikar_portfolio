import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio7.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG8 from '../../assets/portfolio8.png'

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
            <a href="https://github.com/ShantanuWaikar10/" className='btn'>Github</a>
            <a href="https://weather-app-react-by-shantanu.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Restaurant Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ShantanuWaikar10/restaurant-website" className='btn'>Github</a>
            <a href="https://restaurant-website-flax-seven.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>e-Learning App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ShantanuWaikar10/e-Learning-Website" className='btn'>Github</a>
            <a href="https://e-learning-by-shantanu.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio