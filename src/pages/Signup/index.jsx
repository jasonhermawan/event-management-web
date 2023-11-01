import React from 'react'
import './signup.css'
import {useNavigate} from 'react-router-dom'
import Logo from '../../assets/blue-logo.png'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div id="signup-page">
      <div id='logoLoc'>
        <img  id='logoE' src={Logo} alt="LogoEventclick" />
      </div>
      <div id='container-body'>
      <div id="image-section">
        <div id='imgs'>
        <img id='logoAnim' src="https://img.freepik.com/free-vector/team-office-workers-planning-business-giant-calendar_74855-19912.jpg?size=626&ext=jpg&ga=GA1.1.1709398385.1682491417&semt=ais" alt="" />
        </div>
      </div>
      <div id="form-section">
        <div id='place'>
        <h1 >Sign Up</h1>
        <input type="text" placeholder='Username'/>
        <input type="email" placeholder='Email Address'/>
        <input type="password" placeholder='Create Password'/>
        <input type="password" placeholder='Confirm your Password'/>
        <h5 style={{marginLeft:"5px" , marginBottom:"5px"}}>Choose Your Account Type</h5 >
        <button className='button-a'>Promotor</button>
        <button className='button-b'>User</button>
        <p>Already have an account? <span onClick={()=>navigate("/signin")} style={{textDecoration:"underline", cursor:"pointer", color:"blue", fontWeight:"600"}}>Sign in</span></p>
        </div>
        
      </div>
      </div>
      
    </div>
  )
}

export default Signup