import React, { useState } from 'react'
import './ticketCategory.css'
import { useToast } from '@chakra-ui/react'

const TicketCategory = (props) => {
  const toast = useToast();
  const [count, setCount] = useState(0)

  const onDecrement = () => {
    if (count > 0) {
      setCount(count-1);
    }
  }

  const onIncrement = () => {
    if (count < 5) {
      setCount(count+1);
    } else {
      toast({
        title: "Max tickets",
        description: "Maximum 5 per ticket category.",
        isClosable: true,
        duration: 5000,
        status: "error",
        position: "top"
      })
    }
  }

  return (
    <div className="ticket-category-card">
      <div className="ticket-name">
        <h3>{props.ticketName}</h3>
        <p>{props.ticketPrice}</p>
      </div>
      <div className="ticket-qty">
        <button onClick={()=>onDecrement()} style={{cursor:"pointer"}}>-</button>
        <p className='ticket-count'>{count}</p>
        <button onClick={()=>onIncrement()} style={{cursor:"pointer"}}>+</button>
      </div>
    </div>
  )
}

export default TicketCategory