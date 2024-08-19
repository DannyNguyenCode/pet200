'use client'
import React, { useEffect, useState } from 'react'
import LoginForm from '@components/LoginForm'
import { User } from '@interfaces/user'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
const Login = () => {
  const router = useRouter();
  const {data:session}= useSession();
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [submitting,setSubmitting]= useState(false);
  
 
  return (
    <LoginForm 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  )
}

export default Login