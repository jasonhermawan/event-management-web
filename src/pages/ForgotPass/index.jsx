import axios from 'axios';
import React, { useState } from 'react'
import { Spinner, useToast } from '@chakra-ui/react'

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const onSubmit = async () => {
    try {
      setLoading(true)
      await axios.post(`${import.meta.env.VITE_API_URL}/account/forgot/pass`, {
        email,
      })
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
      toast({
        title: 'Email verification send.',
        description: "Please check your email",
        status: 'success',
        duration: 5000,
        position: "top",
        isClosable: true,
      })
    }
  }

  return (
    <div className="form-section">
      <div className="form-title">
        <h1>Email Verification</h1>
      </div>
      <div className="login-input">
        <h3>Enter account email</h3>
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <button className='form-submit-btn' onClick={() => onSubmit()}>{loading ? <Spinner /> : "Send Verification"}</button>
    </div>
  )
}

export default ForgotPass