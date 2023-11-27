import React from 'react'
import './promotorCard.css'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const PromotorCard = (props) => {
  return (
    <div id='promotor-card'>
      <div className="top-promotor-card">
        <Avatar size="lg" src='https://bit.ly/broken-link' />
        <h2>{props.username}</h2>
        <p>Promotor</p>
      </div>
      <div className="bottom-promotor-card">
        <button onClick={props.onclick}>Stalk now</button>
      </div>
    </div>
  )
}

export default PromotorCard