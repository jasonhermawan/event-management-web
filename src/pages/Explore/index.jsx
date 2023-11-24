import React from 'react'
import Layout from '../../Layout'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './explore.css'
import Pagination from '../../components/Pagination'
import EventCardExplore from '../../components/EventCardExplore'
import ExploreSidebar from '../../components/ExploreSidebar'
import { useLocation, useNavigate } from 'react-router-dom'

const Explore = () => {
  const search = useLocation().search;
  const [allEventLength, setAllEventLength] = useState()
  const [eventList, setEventList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [eventPerPage, setEventPerPage] = useState(8)

  console.log(search);

  const navigate = useNavigate();

  const getAllEventLength = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events`)
      setAllEventLength(response.data.length)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllEventLength()
  }, [])

  const getEvent = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events${search}`)
      setEventList(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getEvent()
  },[search])

  const lastEventIndex = currentPage * eventPerPage;
  const firstEventIndex = lastEventIndex - eventPerPage;

  const printEventList = () => {
    return eventList.slice(firstEventIndex, lastEventIndex).map((val)=>{
      return(
        <EventCardExplore
          onclick={() => navigate(`/event/${val.name}/${val.id}`)} 
          eventImage={val.banner}
          eventTitle={val.name}
          eventDate={(val.date).slice(0, 10)}
          eventPrice={`Rp ${(val.price).toLocaleString("id")}`}
          promotor={val.account.username}
        />
      )
    })
  }

  return (
    <Layout>
      <div id='explore-page'>
        <div id="explore-sidebar">
          <ExploreSidebar />
        </div>
        
        <div id="explore-content">
          <div id="explore-navbar">
            <h1>Showing <b>{eventList.length}</b> from total <b>{allEventLength}</b> events listed</h1>
            <div id="explore-filter">
              <select name="" id="price-filter">
                <option value="">Filter by price</option>
                <option value="asc">Lowest to Highest</option>
                <option value="desc">Highest to Lowest</option>
              </select>
            </div>
          </div>
          <div id="explore-cards">
            {printEventList().length ? printEventList() : <h3>No event found</h3>}
          </div>
          <div id="pagination">
            <Pagination totalEvents={eventList.length} eventPerPage={eventPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Explore