import React from 'react'
import './promotorCard.css'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const PromotorCard = (props) => {
  return (
    <div id='promotor-card'>
      <div className="top-promotor-card">
        <Avatar size="lg" src='https://bit.ly/broken-link' />
        <h2>Draw Brighton</h2>
        <p>10 Events</p>
      </div>
      <div className="bottom-promotor-card">
        <button>Stalk now</button>
      </div>
    </div>
  )
}

export default PromotorCard