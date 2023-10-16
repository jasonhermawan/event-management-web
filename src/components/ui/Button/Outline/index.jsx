import React from 'react'
import '../button.css'

const ButtonOutline = (props) => {
  return (
    <button id='btn-outline' onClick={props.onClick}>
      {props.buttonText}
    </button>
  )
}

export default ButtonOutline