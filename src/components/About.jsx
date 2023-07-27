import React from 'react'
import "./About.css"
import splash from '../assets/splash.png' 

const About = () => {
  return (
    <section className='about__container'>
      <div className="about__section">
        <img src={splash} alt="splash" />
        <div className='about__info'> 
        <h2>O nama</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur eos vel a sunt dolor distinctio dolore harum. Ab perspiciatis, sed rerum obcaecati debitis perferendis. Eius esse assumenda dolore magni itaque.</p>
      </div>
        </div>
    </section>
  )
}

export default About