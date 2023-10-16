import React from 'react'
import './signin.css'
import {useNavigate} from 'react-router-dom'
import Logo from '../../assets/blue-logo.png'

const Signin = () => {
  const navigate = useNavigate()
  return (
    <div id="signin-page">
      <div id="image-section">
        <img src="https://images.unsplash.com/photo-1655327103569-7c7e8c4e7267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
      </div>
      <div id="form-section">
        <img src={Logo} alt="" />
        <h1>Sign In Now</h1>
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <button>Sign In</button>
        <p>Don't have an account yet?</p>
        <p onClick={()=>navigate("/signup")} style={{textDecoration:"underline", cursor:"pointer"}}>Sign up</p>
      </div>
    </div>
  )
}

export default Signin