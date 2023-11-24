import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

const ResetPass = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toast = useToast();

  const location = useLocation();
  const navigate = useNavigate();

  const onReset = async () => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/account/reset/pass`, {
        password: newPassword,
        confirmPassword,
      }, {
        headers: {
          Authorization: `Bearer ${location.search.slice(6)}`
        }
      })
    } catch (error) {
      console.log(error);
    } finally {
      setNewPassword("");
      setConfirmPassword("");
      toast({
        title: 'Reset Password success.',
        status: 'success',
        duration: 5000,
        position: "top",
        isClosable: true,
      })
      navigate("/")
    }
  }

  return (
    <div className='form-section'>
      <h1 className='form-title'>Reset Password</h1>
      <div className="login-input">
        <h3>New Password</h3>
        <input value={newPassword} type="password" onChange={(e) => setNewPassword(e.target.value)}/>
      </div>
      <div className="login-input">
        <h3>Confirm Password</h3>
        <input value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
      </div>
      <button className='form-submit-btn' onClick={() => onReset()}>Reset Pass</button>
    </div>
  )
}

export default ResetPass