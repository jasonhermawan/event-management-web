import React from 'react'
import './signup.css'
import {useNavigate} from 'react-router-dom'
import Logo from '../../assets/blue-logo.png'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div id="signup-page">
      <div id="image-section">
        <img src="https://images.unsplash.com/photo-1655327103569-7c7e8c4e7267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
      </div>
      <div id="form-section">
        <img src={Logo} alt="" />
        <h1>Sign up Now</h1>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Create Password'/>
        <input type="password" placeholder='Confirm your Password'/>
        <button>Create Account</button>
        <p>Already have an account?</p>
        <p onClick={()=>navigate("/signin")} style={{textDecoration:"underline", cursor:"pointer"}}>Sign in</p>
      </div>
    </div>
  )
}

export default Signup