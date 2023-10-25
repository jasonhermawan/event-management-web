import React from 'react'
import Layout from '../../Layout'
import axios from 'axios'
import {API_URL} from '../../helper'
import EventCard from '../../components/EventCard'
import { useState, useEffect } from 'react'
import './explore.css'
import Pagination from '../../components/Pagination'

const Explore = () => {
  const [eventList, setEventList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [eventPerPage, setEventPerPage] = useState(8)

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

  const lastEventIndex = currentPage * eventPerPage;
  const firstEventIndex = lastEventIndex - eventPerPage;

  const printEventList = () => {
    return eventList.slice(firstEventIndex, lastEventIndex).map((val)=>{
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
      <div id='explore-page' className='layouting'>
        <div id="explore-navbar">
          <h1>Upcoming Events</h1>
          <div id="explore-filter">
            <select name="" id="price-filter">
              <option value="">Filter by price</option>
              <option value="asc">Lowest to Highest</option>
              <option value="desc">Highest to Lowest</option>
            </select>
          </div>
        </div>
        <div id="explore-content">
          {printEventList()}
        </div>
        <div id="pagination">
          <Pagination totalEvents={eventList.length} eventPerPage={eventPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </div>
    </Layout>
  )
}

export default Explore