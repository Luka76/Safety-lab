import React from 'react'
import "./Footer.css"
import {AiFillFacebook, AiOutlineTwitter} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <section id='#contact' className='footer'>
      <div className='footer__container'>
        <div className='footer__contact'>
          <h2>Kontaktirajte nas: </h2>
          <h4>+385454546 hehehe</h4>
          <p>Radnička 13, 4304390 HRvatska, lokacija coming soon</p>
        </div>
        <div className='footer__socials'>
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          <div className='footer_icons'>
            <p>Potražite nas i na društvenim mrežama: </p>
            <a href="https://facebook.com/" target='_blank'><AiFillFacebook className='icon'/></a>
            <a href="https://instagram.com/" target='_blank'><BsInstagram className='icon'/></a>
            <a href="https://twitter.com/" target='_blank'><AiOutlineTwitter className='icon'/></a>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer