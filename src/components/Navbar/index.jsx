import React, { useEffect, useState } from 'react'
import './navbar.css'
import Logo from '../../assets/white-logo.png'
import ButtonPrimary from '../ui/Button/Primary'
import ButtonOutline from '../ui/Button/Outline'
import { useNavigate } from 'react-router-dom'
import SearchCard from '../SearchCard'
import axios from 'axios'

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("")
  const [dataEvents, setDataEvents] = useState([])

  const navigate = useNavigate()

  const getEvents = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events`)
      setDataEvents(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEvents()
  }, [])

  const printSearchResult = () => {
    return dataEvents.filter((value) => {
      return value.name.toLowerCase().includes(searchInput.toLowerCase());
    }).map((value) => {
      return (
        <SearchCard 
          image={value.banner}
          onclick={() => {navigate(`/event/${value.name}/${value.id}`); setSearchInput("")}}
          eventname={value.name}
        />
      )
    })
  }

  const printSearch = () => {
    if (searchInput === "") {
      return ""
    } else {
      return (
        <div id="search-input-result">
          {printSearchResult()}
        </div>
      )
    }
  }

  return (
    <div id="navbar">
      <div id="left-nav">
        <img className='logo' src={Logo} alt="" height={"30px"} onClick={()=>navigate("/")} style={{cursor: "pointer"}}/>
        <div id="search-input-section">
          <input value={searchInput} type="text" placeholder='Search event name' className='nav-search' onChange={(e) => setSearchInput(e.target.value)}/>
          {printSearch()}
        </div>
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
        <div className="mobile-menu-item" onClick={() => navigate("/")}>
          <i class="fa-solid fa-house-chimney"></i>
          <h3>Home</h3>
        </div>
        <div className="mobile-menu-item" onClick={() => navigate("/")}>
          <i class="fa-solid fa-calendar-plus"></i>
          <h3>Create Event</h3>
        </div>
        <div className="mobile-menu-item" onClick={() => navigate("/explore")}>
          <i class="fa-solid fa-compass"></i>
          <h3>Explore</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar