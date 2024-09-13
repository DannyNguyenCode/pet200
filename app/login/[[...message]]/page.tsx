'use client'
import React, { useState } from 'react'
import LoginForm from '@components/LoginForm'
const Login = ({ params }: { params: { message: string } }) => {

  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [submitting,setSubmitting]= useState(false);
  
 
  return (
    <LoginForm
      message={params.message} 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  )
}

export default Login