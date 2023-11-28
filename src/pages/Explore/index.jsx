import React from 'react'
import Layout from '../../Layout'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './explore.css'
import Pagination from '../../components/Pagination'
import EventCardExplore from '../../components/EventCardExplore'
import ExploreSidebar from '../../components/ExploreSidebar'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import convertDate from '../../convertFnc'
import SortDropdown from '../../components/SortDropdown'

const Explore = () => {
  const search = useLocation().search;
  const pages =[]
  const [searchParams, setSearchParams] = useSearchParams();
  const [allEventLength, setAllEventLength] = useState()
  const [eventList, setEventList] = useState([])
  const [eventPerPage, setEventPerPage] = useState(8)
  const [sortClick, setSortClick] = useState(false);
  const [sortResult, setSortResult] = useState("Date");

  console.log(search);

  const navigate = useNavigate();

  const getAllEventLength = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/events/all${search}`)
      setAllEventLength(response.data.length)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllEventLength()
  }, [search])

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

  const handlePaginate = (newPage) => {
    const updateQuery = (searchParams, newPage) => {
      searchParams.set("page", newPage);
      return searchParams.toString();
    }
    const queryParams = new URLSearchParams(search);
    const updatedQueryParms = updateQuery(queryParams, newPage);
    
    navigate(`/explore?${updatedQueryParms}`)
  }

  const printEventList = () => {
    return eventList.map((val)=>{
      return(
        <EventCardExplore
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

  const printPagination = () => {
    for (let i = 1; i <= Math.ceil(allEventLength / eventPerPage); i++) {
      pages.push(i)
    }
    return pages.map((val, idx) => {
      return (
        <Pagination page={val} onclick={() => handlePaginate(val)} currentPage={searchParams.get("page") || 1}/>
      )
    })
  }

  const printSort = () => {
    if (sortClick) {
      return (
        <div className="sort-dropdown">
          <SortDropdown
            text="From closest date"
            onclick={() => {
              setSortClick(false);
              searchParams.set("sortby", "asc");
              setSearchParams(searchParams);
            }}
            active={searchParams.get("sortby") === "asc" ? "active-sort" : ""}
          />
          <SortDropdown
            text="From furthest date"
            onclick={() => {
              setSortClick(false);
              searchParams.set("sortby", "desc");
              setSearchParams(searchParams);
            }}
            active={searchParams.get("sortby") === "desc" ? "active-sort" : ""}
          />
        </div>
      );
    }
  };

  useEffect(() => {
    setSortClick(false)
  }, [search])

  const getSortResult = () => {
    const result = searchParams.get("sortby")
    if (result === "asc") {
      setSortResult("Closest date")
    } else if (result === "desc") {
      setSortResult("Furthest date")
    } else {
      setSortResult("Date")
    }
  }

  useEffect(() => {
    getSortResult()
  }, [sortClick])

  return (
    <Layout>
      <div id='explore-page'>
        <div id="explore-sidebar">
          <ExploreSidebar />
        </div>
        
        <div id="explore-content">
          <div id="explore-navbar">
            <h1>Showing <b>{eventList.length}</b> from total <b>{allEventLength}</b> upcoming events</h1>
            <div id="explore-filter">
              <h3>Sort by date: </h3>
              <div className="desktop-button-item">
                <button
                  className="filter-btn-style-desktop"
                  id="sort-button"
                  onClick={() => setSortClick(!sortClick)}
                >
                  <h3>{sortResult}</h3>
                  {sortClick ? <i class='bx bx-chevron-up'></i> : <i class='bx bx-chevron-down'></i>}
                </button>
                {printSort()}
              </div>
            </div>
          </div>
          <div id="explore-cards">
            {printEventList().length ? printEventList() : <h3>No event found</h3>}
          </div>
          <div id="pagination">
            {printPagination()}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Explore