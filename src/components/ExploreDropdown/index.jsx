import React from 'react'
import './exploreDropdown.css'

const ExploreDropdown = (props) => {
  return (
    <div onClick={props.onclick} className='explore-dropdown'>
      {props.text}
    </div>
  )
}

export default ExploreDropdown