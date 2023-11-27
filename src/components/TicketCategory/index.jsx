import React, { useState } from 'react'
import './ticketCategory.css'

const TicketCategory = ({ticketName , ticketPrice , onSelect}) => {
  const [count, setCount] = useState(0)
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    onSelect(ticketName, !isSelected);
  };

  const onDecrement = () => {
    if (count > 0) {
      setCount(count-1);
    }
  }

  const onIncrement = () => {
    if (count < 5) {
      setCount(count+1);
    } else {
      alert("Maximum 5 tickets per purchase")
    }
  }

  return (
    <div id="ticket-category-card">
      <div id="ticket-name">
        <h3>{ticketName}</h3>
        <p>{ticketPrice}</p>
      </div>
      <div id="ticket-qty">
        <button onClick={()=>{onDecrement();handleSelect()}} style={{cursor:"pointer"}}>-</button>
        <p id='ticket-count'>{count}</p>
        <button  onClick={()=>{onIncrement(); handleSelect()}} style={{cursor:"pointer"}}>+</button>
      </div>
    </div>
  )
}

export default TicketCategory