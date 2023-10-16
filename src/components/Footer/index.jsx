import React from 'react'
import './footer.css'
import Logo from '../../assets/white-logo.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div id='footer'>
      <div id="footer-brand">
        <img className='logo' src={Logo} alt="" height={"30px"} onClick={()=>navigate("/")} style={{cursor: "pointer"}}/>
      </div>
      <div id="footer-list">
        <div id="about" className='footer-menu'>
          <h3>About EventClick</h3>
          <h5>Sign in</h5>
          <h5>Explore Event</h5>
          <h5>FAQ</h5>
          <h5>Terms and Condition</h5>
          <h5>Privacy Policy</h5>
        </div>
        <div id="location" className='footer-menu'>
          <h3>Event Location</h3>
          <h5>Surabaya</h5>
          <h5>Jakarta</h5>
          <h5>Bandung</h5>
          <h5>Yogyakarta</h5>
          <h5>Bali</h5>
        </div>
        <div id="category" className='footer-menu'>
          <h3>Event Category</h3>
          <h5>Fest</h5>
          <h5>Concert</h5>
          <h5>Sport</h5>
          <h5>Workshop</h5>
          <h5>All Category</h5>
        </div>
        <div id="connect" className='footer-menu'>
          <h3>Connect with Us</h3>
          <h5>Contact Support</h5>
          <h5>Twitter</h5>
          <h5>Facebook</h5>
          <h5>Instagram</h5>
          <h5>Youtube</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer