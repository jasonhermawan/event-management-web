import React from 'react'
import './searchCard.css'

const SearchCard = (props) => {
  return (
    <div id="search-card-content" onClick={props.onclick}>
      {/* <i class="bx bx-search"></i> */}
      <img src={props.image} alt=""/>
      <p>{props.eventname}</p>
    </div>
  )
}

export default SearchCard