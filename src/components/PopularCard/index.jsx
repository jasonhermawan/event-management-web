import React from 'react'
import './popularCard.css'

const PopularCard = (props) => {
  return (
    <div id='popular-card'>
      <h1>{props.nums}</h1>
      <div id='popular-banner'>
       <img src={props.img} alt=""/>
      </div>
    </div>
  )
}

export default PopularCard