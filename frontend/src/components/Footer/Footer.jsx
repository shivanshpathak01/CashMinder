import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-pattern"></div>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="TastyBites Logo" />
          <p>Bringing delicious food right to your doorstep. We're passionate about connecting food lovers with the best local restaurants and dishes. Fast delivery, fresh ingredients, and amazing taste in every bite!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" title="Follow us on Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" title="Follow us on Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" title="Connect on LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Explore</h2>
          <ul>
            <li>Our Menu</li>
            <li>Popular Dishes</li>
            <li>Special Offers</li>
            <li>Partner Restaurants</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Hungry?</h2>
          <ul>
            <li>Order Now: +91-884560-120</li>
            <li>tastybites@foodie.com</li>
            <li>Download Our App</li>
            <li>Become a Delivery Partner</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © {new Date().getFullYear()} TastyBites | Delicious Food Delivered | All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
