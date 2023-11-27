import React from 'react'
import './sort.css'

const SortDropdown = (props) => {
  return (
    <div className='sort-drop-item' id={props.active} onClick={props.onclick}>
      {props.text}
    </div>
  )
}

export default SortDropdown