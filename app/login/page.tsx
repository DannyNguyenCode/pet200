'use client'
import React, { useEffect, useState } from 'react'
import LoginForm from '@components/LoginForm'
import { accountcredentials } from '@interfaces/accountcredentials'
import { useRouter } from 'next/navigation'
const Login = () => {
  const router = useRouter();
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [submitting,setSubmitting]= useState(false);
  
  const authenticateUser = async (e:any)=>{
    e.preventDefault();
    setSubmitting(true);
      try{
        
        const res = await fetch(`/api/userCredentials/${email}`);
        const data:accountcredentials = await res.json();
 
        let isPasswordValid = data.password === password;
  
        if(isPasswordValid){
          router.push('/profile')
        }else{
          console.log("Password not a match")
        }
      }catch(err){
        console.log("Error has occured",err)
      }finally{
        setSubmitting(false)
      }


  

  }  
  return (
    <LoginForm 
      authenticateUser={authenticateUser}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  )
}

export default Login