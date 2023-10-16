import React from 'react'
import '../button.css'

const ButtonPrimary = (props) => {
  return (
    <button id='btn-primary' onClick={props.onClick}>
      {props.buttonText}
    </button>
  )
}

export default ButtonPrimary