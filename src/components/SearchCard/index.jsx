import React from 'react'
import './searchCard.css'

const SearchCard = (props) => {
  return (
    <div id="search-card-content" onClick={props.onclick}>
      <img src={props.image} alt=""/>
      <p>{props.eventname}</p>
    </div>
  )
}

export default SearchCard