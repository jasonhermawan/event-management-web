import React from 'react'
import './exploreSidebar.css'

const ExploreSidebar = (props) => {
  return (
    <div id='explore-bar'>
      <h1>Filter Event</h1>
      <hr className='sidebar-divider-top'/>
      <div id="filtering-section">
        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3>Location</h3>
            <i class='bx bx-chevron-down'></i>
          </div>
          <div className="filter-result">

          </div>
        </div>

        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3>Date</h3>
            <i class='bx bx-chevron-down'></i>
          </div>
          <div className="filter-result">

          </div>
        </div>

        <hr className='sidebar-divider'/>

        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3>Format</h3>
            <i class='bx bx-chevron-down'></i>
          </div>
          <div className="filter-result">

          </div>
        </div>

        <div className="sidebar-filter-item">
          <div className="dropdown-title">
            <h3>Topic</h3>
            <i class='bx bx-chevron-down'></i>
          </div>
          <div className="filter-result">

          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreSidebar