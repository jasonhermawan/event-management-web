import React from 'react'
import './eventCard.css'
import { useNavigate } from 'react-router-dom'

const EventCard = (props) => {
  const navigate = useNavigate()

  return (
    <div id="card-container">
      <div id='card' onClick={() => navigate("/event")}>
        <img src={props.eventImage} alt={props.eventTitle} width="100%"/>
        <div id="card-details">
          <h1 id='title'>{props.eventTitle}</h1>
          <h3 id='date'>{props.eventDate}</h3>
          <h3 id='price'>{props.eventPrice}</h3>
          <hr />
          <h3 id='promotor'>{props.promotor}</h3>
        </div>
      </div>
    </div>
  )
}

export default EventCard