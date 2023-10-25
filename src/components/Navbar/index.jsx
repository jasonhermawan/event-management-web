import React from 'react'
import './navbar.css'
import Logo from '../../assets/white-logo.png'
import ButtonPrimary from '../ui/Button/Primary'
import ButtonOutline from '../ui/Button/Outline'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div id="navbar">
      <div id="left-nav">
        <img className='logo' src={Logo} alt="" height={"30px"} onClick={()=>navigate("/")} style={{cursor: "pointer"}}/>
        <input type="text" placeholder='Search event name' className='nav-search'/>
      </div>
      <div id="right-nav">
        <div id="desktop-nav">
          <div className="nav-menu" onClick={() => navigate("/create-event")} style={{cursor: "pointer"}}>
            <i class="fa-solid fa-calendar-plus"></i>
            <h3>Create Event</h3>
          </div>
          <div className="nav-menu" onClick={() => navigate("/explore")} style={{cursor: "pointer"}}>
            <i class="fa-solid fa-compass"></i>
            <h3>Explore</h3>
          </div>
          <ButtonOutline buttonText="Sign up" onClick={() => navigate("/signup")} />
          <ButtonPrimary buttonText="Sign in" onClick={() => navigate("/signin")} />
        </div>
        <div id="mobile-nav">
          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div id="mobile-menu">
        <div className="mobile-menu-item">
          <i class="fa-solid fa-house-chimney"></i>
          <h3>Home</h3>
        </div>
        <div className="mobile-menu-item">
          <i class="fa-solid fa-calendar-plus"></i>
          <h3>Create Event</h3>
        </div>
        <div className="mobile-menu-item">
          <i class="fa-solid fa-compass"></i>
          <h3>Explore</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar