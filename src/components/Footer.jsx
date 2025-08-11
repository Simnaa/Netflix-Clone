import React from 'react'
import './Footer.css'
import insta from '../assets/insta.webp'
import facebook from '../assets/facebook.jpg'
import twitter from '../assets/twitter.png'
import utube from '../assets/utube.jpg'
const Footer = () => {
  return (
    <div className='footer'>
          <div className='footer-icons'>
            <img src={insta} alt=''/>
            <img src={facebook} alt=''/>
            <img src={twitter} alt=''/>
            <img src={utube} alt=''/>
          </div>
<ul>
  <li>Audio Description</li>
  <li>Help Centre</li>
  <li>Gift Cards</li>
  <li>Media Centre</li>
  <li>Investor Relations</li>
  <li>Jobs</li>
  <li>Terms of Use</li>
  <li>Privacy</li>
  <li>Legal Notices</li>
  <li>Cookie Preferences</li>
  <li>Corporate Informations</li>
  <li>Contact Us</li>

</ul>
<p className='copywrite'>1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer