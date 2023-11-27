import React, { useState } from 'react'

const TicketList = (props) => {

  return (
    <div className="ticket-category-card">
      <div className="ticket-name">
        <h3>{props.ticketName}</h3>
        <p>{props.ticketPrice}</p>
      </div>
    </div>
  )
}

export default TicketList