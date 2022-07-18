import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>I will design the attractive website with Figma.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Design page navigation buttons and search fields.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Make the responsive design.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Identify and fix user experience issues (e.g. responsiveness).</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Create original graphic designs (e.g. images, sketches, and tables).</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>I will create responsive website with React.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>You will able to use your website in mobile, tablet and desktop.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Designs, writes, and edits website content.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Creates solutions for identified problems or bugs.</p>
            </li>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Create multiple pages without reloading the website.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services