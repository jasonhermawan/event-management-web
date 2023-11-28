import React, { useEffect, useState } from 'react'
import './navbar.css'
import Logo from '../../assets/white-logo.png'
import ButtonPrimary from '../ui/Button/Primary'
import ButtonOutline from '../ui/Button/Outline'
import { useNavigate } from 'react-router-dom'
import SearchCard from '../SearchCard'
import axios from 'axios'

const Navbar = () => {
  const token = localStorage.getItem("TOKEN");
  const [role, setRole] = useState("");
  const [mobileClick, setMobileClick] = useState(false);
  const [username, setUsername] = useState("")

  if (token) {
    const getRole = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/accounts/role`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setRole(response.data.role)
      setUsername(response.data.username)
    }
  
    useEffect(() => {
      getRole();
    }, [])
  }

  const printRightNavRole = () => {
    if (role === "promotor") {
      return (
        <div id="desktop-nav">
            <div className="nav-menu" onClick={() => navigate("/create-event")} style={{cursor: "pointer"}}>
              <i class="fa-solid fa-calendar-plus"></i>
              <h3>Create Event</h3>
            </div>
            <div className="nav-menu" onClick={() => navigate("/explore")} style={{cursor: "pointer"}}>
              <i class="fa-solid fa-compass"></i>
              <h3>Explore</h3>
            </div>
            <div className="nav-menu" onClick={() => navigate("/profile-user/my-ticket")} style={{cursor: "pointer"}}>
              <i class='bx bxs-user' ></i>
              <h3>{username}</h3>
            </div>
        </div>
      )
    } else if (role === "user") {
      return (
        <div id="desktop-nav">
            <div className="nav-menu" onClick={() => navigate("/explore")} style={{cursor: "pointer"}}>
              <i class="fa-solid fa-compass"></i>
              <h3>Explore</h3>
            </div>
            <div className="nav-menu" onClick={() => navigate("/profile-user/my-ticket")} style={{cursor: "pointer"}}>
              <i class='bx bxs-user' ></i>
              <h3>{username}</h3>
            </div>
          </div>
      )
    } else {
      return (
        <div id="desktop-nav">
            <div className="nav-menu" onClick={() => navigate("/create-event")} style={{cursor: "pointer"}}>
              <i class="fa-solid fa-calendar-plus"></i>
              <h3>Create Event</h3>
            </div>
            <div className="nav-menu" onClick={() => navigate("/explore")} style={{cursor: "pointer"}}>
              <i class="fa-solid fa-compass"></i>
              <h3>Explore</h3>
            </div>
            <ButtonOutline buttonText="Sign up" onClick={() => navigate("/choose-role")} />
            <ButtonPrimary buttonText="Sign in" onClick={() => navigate("/signin")} />
          </div>
      )
    }
  }

  useEffect(() => {
    printRightNavRole()
  }, [])

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
          image={`${import.meta.env.VITE_API_URL}/public/events/${
            value.banners[0].image
          }`}
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
        {printRightNavRole()}
        <div id="mobile-nav">
          <div className="menu-toggle">
            <i class='bx bx-search-alt-2' onClick={() => setMobileClick(!mobileClick)}></i>
          </div>
        </div>
      </div>
      {mobileClick ? 
        <div className="nav-mobile-dropdown">
          <div id="mobile-input">
            <input value={searchInput} type="text" placeholder='Search event name' className='mobile-nav-search' onChange={(e) => setSearchInput(e.target.value)}/>
            {printSearch()}
          </div>
        </div>
        :
        ''
      }
      <div id="mobile-menu">
        <div className="mobile-menu-item" onClick={() => navigate("/")}>
          <i class="fa-solid fa-house-chimney"></i>
          <h3>Home</h3>
        </div>
        <div className="mobile-menu-item" onClick={() => navigate("/explore")}>
          <i class="fa-solid fa-compass"></i>
          <h3>Explore</h3>
        </div>
        <div className="mobile-menu-item" onClick={() => {token ? navigate(`/profile-user/my-ticket`) : navigate("/signin")}}>
        <i class='bx bxs-user'></i>
          <h3>Account</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar