import React from 'react'
import './exploreDropdown.css'

const ExploreDropdown = (props) => {
  return (
    <div onClick={props.onclick} className='explore-dropdown'>
      <p>{props.text}</p>
    </div>
  )
}

export default ExploreDropdown