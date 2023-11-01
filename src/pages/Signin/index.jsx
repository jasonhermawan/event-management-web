import React from 'react'
import './signin.css'
import {useNavigate} from 'react-router-dom'
import Logo from '../../assets/blue-logo.png'
import LogoWhite from '../../assets/white-logo.png'

const Signin = () => {
  const navigate = useNavigate()
  return (
    <div id="signin-page">

      <div id='logo-div'>
        <img  id='logoEv' src={Logo} alt="LogoEventclick" />
        <img  id='logoEg' src={LogoWhite} alt="LogoEventclick" />
      </div>

      <div id='container-b'>
        <div id="image-section-b">
          <img id='logo-vector' src="https://img.freepik.com/free-vector/team-office-workers-planning-business-giant-calendar_74855-19912.jpg?size=626&ext=jpg&ga=GA1.1.1709398385.1682491417&semt=ais" alt="" />
        </div>
        <div id="form-section">
          <div id='place-b'>
            <h1>Sign In</h1>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button>Sign In</button>
            <p className='makesure' >Don't have an account yet? <span onClick={()=>navigate("/signup")} style={{textDecoration:"underline", cursor:"pointer", color:"blue" , fontWeight:"bold"}}>Sign up</span></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signin