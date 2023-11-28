import React, { useEffect, useState } from 'react'
import './landing.css'
import Layout from '../../Layout'
import EventCard from '../../components/EventCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import PopularCard from '../../components/PopularCard'
import PromotorCard from '../../components/PromotorCard'
import LandingDropdown from '../../components/LandingDropdown'
import convertDate from '../../convertFnc'

const LandingPage = () => {
  const navigate = useNavigate()
  const [cityList, setCityList] = useState([]);
  const [eventList, setEventList] = useState([])
  const [nearestEvents, setNearestEvents] = useState([])
  const [eventEntertainment, setEventEntertainment] = useState([]);
  const [eventEducation, setEventEducation] = useState([]);
  const [eventListByCity, setEventListByCity] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState(3)
  const [selectedCityName, setSelectedCityName] = useState("")
  const [promotor, setPromotor] = useState([]);
  const [searchInput, setSearchInput] = useState("")

  console.log("tes date", `${"2023-05-05" > "2023-05-03"}`);
  const today = new Date()
  console.log("tes date()", today);

  const getPromotorAccounts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/accounts?role=promotor`)
      setPromotor(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getNearestEvents = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events?sortby=asc`)
      setNearestEvents(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getEvent = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events`)
      setEventList(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getEventByCity = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events?cityid=${selectedCity}`)
      setEventListByCity(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getEventEntertainment = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events?topicid=2`)
      setEventEntertainment(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getEventEducation = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events?topicid=3`)
      setEventEducation(response.data);
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(()=>{
    getNearestEvents()
    getPromotorAccounts()
    getEvent()
    getEventEntertainment()
    getEventEducation()
    getEventByCity()
  },[])

  const printPromotorCard = () => {
    return promotor.map((val) => {
      return (
        <PromotorCard 
          username={val.username}
          onclick = {() => navigate(`/promotor/${val.username}/${val.id}`)}
        />
      )
    })
  }

  const getCityName = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/cities?id=${selectedCity}`)
    setSelectedCityName(response.data[0].city)
  }

  useEffect(() => {
    getCityName()
  }, [getEventByCity])

  const printEventList = () => {
    return eventList.map((val)=>{
      console.log("val", val);
      return(
        <EventCard 
          onclick={() => navigate(`/event/${val.name}/${val.id}`)}
          eventImage={`${import.meta.env.VITE_API_URL}/public/events/${
            val.banners[0].image
          }`}
          eventTitle={val.name}
          eventDate={
            val.startDate === val.endDate ? `${convertDate((val.startDate).slice(0, 10))}` : `${convertDate((val.startDate).slice(0, 10))} - ${convertDate((val.endDate).slice(0, 10))}`
          }
          eventPrice={`Rp ${(val.tickets[0].price).toLocaleString("id")}`}
          promotor={val.account.username}
        />
      )
    })
  }

  const printEntertainment = () => {
    return eventEntertainment.map((val) => {
      return (
        <EventCard 
          onclick={() => navigate(`/event/${val.name}/${val.id}`)}
          eventImage={`${import.meta.env.VITE_API_URL}/public/events/${
            val.banners[0].image
          }`}
          eventTitle={val.name}
          eventDate={
            val.startDate === val.endDate ? `${convertDate((val.startDate).slice(0, 10))}` : `${convertDate((val.startDate).slice(0, 10))} - ${convertDate((val.endDate).slice(0, 10))}`
          }
          eventPrice={`Rp ${(val.tickets[0].price).toLocaleString("id")}`}
          promotor={val.account.username}
        />
      )
    })
  }

  const printEducation = () => {
    return eventEducation.map((val) => {
      return (
        <EventCard
          onclick={() => navigate(`/event/${val.name}/${val.id}`)} 
          eventImage={`${import.meta.env.VITE_API_URL}/public/events/${
            val.banners[0].image
          }`}
          eventTitle={val.name}
          eventDate={
            val.startDate === val.endDate ? `${convertDate((val.startDate).slice(0, 10))}` : `${convertDate((val.startDate).slice(0, 10))} - ${convertDate((val.endDate).slice(0, 10))}`
          }
          eventPrice={`Rp ${(val.tickets[0].price).toLocaleString("id")}`}
          promotor={val.account.username}
        />
      )
    })
  }

  const printByCity = () => {
    return eventListByCity.map((val) => {
      return (
        <EventCard 
          onclick={() => navigate(`/event/${val.name}/${val.id}`)}
          eventImage={`${import.meta.env.VITE_API_URL}/public/events/${
            val.banners[0].image
          }`}
          eventTitle={val.name}
          eventDate={
            val.startDate === val.endDate ? `${convertDate((val.startDate).slice(0, 10))}` : `${convertDate((val.startDate).slice(0, 10))} - ${convertDate((val.endDate).slice(0, 10))}`
          }
          eventPrice={`Rp ${(val.tickets[0].price).toLocaleString("id")}`}
          promotor={val.account.username}
        />
      )
    })
  }

  // Nearest Events
  const printPopular = () => {
    return nearestEvents.slice(1,4).map((val, idx) => {
      return (
        <PopularCard 
          nums={idx + 1}
          img={`${import.meta.env.VITE_API_URL}/public/events/${
            val.banners[0].image
          }`}
          onclick={() => navigate(`/event/${val.name}/${val.id}`)}
        />
      )
    })
  }

  const getCityList = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/cities`);
    setCityList(response.data)
  }

  useEffect(() => {
    getCityList();
  }, [])

  const printCityDropdown = () => {
      // return cityList.map((value) => {
      //   if (dropdown) {
      //     return (
      //       <LandingDropdown 
      //         onclick={() => {setSelectedCity(value.id); setDropdown(!dropdown)}}
      //         cityname={value.city}
      //       />
      //     )
      //   }
      // })
      return cityList.filter((value) => {
        return value.city.toLowerCase().includes(searchInput.toLowerCase());
      }).map((value) => {
        return (
          <LandingDropdown 
            onclick={() => {setSelectedCity(value.id); setDropdown(!dropdown)}}
            cityname={value.city}
          />
        )
      })
  }

  useEffect(() => {
    getEventByCity()
  }, [selectedCity])

  const printCityOption = () => {
    return (
      <div style={{display:"inline-block"}}>
        <div className="option-title" onClick={() => setDropdown(!dropdown)}>{selectedCityName} {dropdown ? <i class='bx bxs-chevron-up' ></i> : <i class='bx bxs-chevron-down' ></i>}</div>
        {dropdown ? <div className="dropdown-section">
          <input type="text" placeholder="Search location" onChange={(e) => setSearchInput(e.target.value)}/>
          {printCityDropdown()}
        </div> : ""}
      </div>
    )
  }

  return (
    <Layout>
      <div className='page-padding'>
        <div className="layouting">
          <div className="image-slider">
            <img src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1690260495_PraZyu.jpg" width={"100%"} alt="" />
          </div>
          <div id="top-choice">
            <h1>Top Choice</h1>
            <div className="event-cards">
              {printEventList()}
            </div>
          </div>
        </div>
        <div id="most-popular">
          <div className="layouting">
            <h1>Nearest Events</h1>
            <div className="popular-events" >
              {printPopular()}
            </div>
          </div>
        </div>
        <div className="layouting">
          <div id="entertainment-section" className='landing-events-list'>
            <h1>Let's Have Fun</h1>
            <div className="event-cards">
              {printEntertainment()}
            </div>
          </div>

          <div className="image-banner">
            <img src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20231102/1698912373_uLDpoU.jpg" alt="" />
          </div>

          <div id='promotor-card-section'>
            <h1>Promotor to stalk</h1>
            <div id="card-container">
              {printPromotorCard()}
            </div>
          </div>

          <div id="talkshow-section" className='landing-events-list'>
            <h1>Let's Be Smarter</h1>
            <div className="event-cards">
              {printEducation()}
            </div>
          </div>

          <div id="filter-by-city" className='landing-events-list'>
            <h1>Popular in <span className='event-select-filter'>{printCityOption()}</span></h1>
            <div className="event-cards">
              {printByCity().length ? printByCity() : <h3>No event found</h3>}
            </div>
          </div>

          <div className="explore-more-btn">
            <button onClick={() => navigate("/explore")}>Explore more events</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage