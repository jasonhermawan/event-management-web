import React, { useEffect, useState } from 'react'
import './landing.css'
import Layout from '../../Layout'
import EventCard from '../../components/EventCard'
import axios from 'axios'
import {API_URL} from '../../helper'

const LandingPage = () => {
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

  return (
    <Layout>
      <div className="layouting">
        <div className="image-slider">
          <img src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1696357756_Z9XJhc.jpg" width={"100%"} alt="" />
        </div>
        <div id="top-choice">
          <h1>Top Choice</h1>
          <div className="event-cards">
            {printEventList()}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage