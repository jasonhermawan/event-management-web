import React, { useEffect, useState } from 'react'
import './landing.css'
import Layout from '../../Layout'
import EventCard from '../../components/EventCard'
import axios from 'axios'
import {API_URL} from '../../helper'
import { useNavigate } from 'react-router-dom'
import PopularCard from '../../components/PopularCard'

const LandingPage = () => {
  const navigate = useNavigate()
  const [eventList, setEventList] = useState([])

  const getEvent = () => {
    axios.get(`${API_URL}/event`)
    .then((res)=>{
      setEventList(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getEvent()
  },[])

  const printEventList = () => {
    return eventList.map((val)=>{
      return(
        <EventCard 
          eventImage={val.banner}
          eventTitle={val.name}
          eventDate={val.date}
          eventPrice={val.price}
          promotor={val.promotor}
        />
      )
    })
  }

  const printPopular = () => {
    return eventList.slice(3,6).map((val, idx) => {
      return (
        <PopularCard 
          nums={idx + 1}
          img={val.banner}
        />
      )
    })
  }

  return (
    <Layout>
      <div className='page-padding'>
        <div className="layouting">
          <div className="image-slider">
            <img src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1699410803_5mA8VQ.jpg" width={"100%"} alt="" />
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
            <h1>Popular Events</h1>
            <div className="popular-events" >
              {printPopular()}
            </div>
          </div>
        </div>
        <div className="layouting">
          <div id="entertainment-section">
            <h1>Let's Have Fun</h1>
            <div className="event-cards">
              {printEventList()}
            </div>
          </div>

          <div id="explore-more-btn">
            <button onClick={() => navigate("/explore")}>Explore more events</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage