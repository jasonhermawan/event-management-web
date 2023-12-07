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
          <h5 onClick={() => navigate("/signin")}>Sign in</h5>
          <h5 onClick={() => navigate("/explore")}>Explore Event</h5>
          <h5>FAQ</h5>
          <h5>Terms and Condition</h5>
          <h5>Privacy Policy</h5>
        </div>
        <div id="location" className='footer-menu'>
          <h3>Event Location</h3>
          <h5 onClick={() => navigate("/explore?cityid=3")}>Surabaya</h5>
          <h5 onClick={() => navigate("/explore?cityid=2")}>Jakarta</h5>
          <h5 onClick={() => navigate("/explore?cityid=4")}>Bali</h5>
          <h5 onClick={() => navigate("/explore?cityid=5")}>Solo</h5>
          <h5 onClick={() => navigate("/explore?cityid=6")}>Bandung</h5>
        </div>
        <div id="category" className='footer-menu'>
          <h3>Event Category</h3>
          <h5 onClick={() => navigate("/explore?formatid=1")}>Concert</h5>
          <h5 onClick={() => navigate("/explore?formatid=2")}>Seminar</h5>
          <h5 onClick={() => navigate("/explore?formatid=3")}>Social</h5>
          <h5 onClick={() => navigate("/explore?formatid=4")}>Workshop</h5>
          <h5 onClick={() => navigate("/explore")}>All Category</h5>
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